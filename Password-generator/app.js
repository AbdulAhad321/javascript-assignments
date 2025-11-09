    // character sets
    const sets = {
      lower: 'abcdefghijklmnopqrstuvwxyz',
      upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbols: '!@#$%&*()-_=+[]{};:,.<>?'
    };

    const ambig = /[O0Il1]/g;

    const el = id => document.getElementById(id);
    const passwordEl = el('password');
    const copyBtn = el('copyBtn');
    const regen = el('regen');
    const lengthRange = el('lengthRange');
    const lenLabel = el('lenLabel');
    const strengthBar = el('strengthBar');
    const strengthText = el('strengthText');

    function getRandomValues(n){
      // returns Uint32Array of length n
      if(window.crypto && crypto.getRandomValues){
        const arr = new Uint32Array(n);
        crypto.getRandomValues(arr);
        return arr;
      }
      // fallback to Math.random if crypto unavailable
      const arr = new Uint32Array(n);
      for(let i=0;i<n;i++) arr[i]=Math.floor(Math.random()*2**31);
      return arr;
    }

    function generatePassword(len, options){
      let pool = '';
      if(options.lower) pool += sets.lower;
      if(options.upper) pool += sets.upper;
      if(options.numbers) pool += sets.numbers;
      if(options.symbols) pool += sets.symbols;

      if(!pool) return '';
      if(options.avoidAmbig) pool = pool.replace(ambig, '');

      const poolLen = pool.length;
      const rands = getRandomValues(len);
      let out = '';
      for(let i=0;i<len;i++){
        const idx = rands[i] % poolLen;
        out += pool.charAt(idx);
      }

      // Try to ensure at least one of each selected class appears
      const classes = [];
      if(options.lower) classes.push(sets.lower.replace(ambig, ''));
      if(options.upper) classes.push(sets.upper.replace(ambig, ''));
      if(options.numbers) classes.push(sets.numbers.replace(ambig, ''));
      if(options.symbols) classes.push(sets.symbols.replace(ambig, ''));

      if(classes.length > 1){
        const arr = out.split('');
        for(let i=0;i<classes.length;i++){
          const cset = classes[i];
          if(cset.length===0) continue;
          const pos = Math.floor(Math.random()*arr.length);
          arr[pos] = cset.charAt(Math.floor(Math.random()*cset.length));
        }
        out = arr.join('');
      }

      return out;
    }

    function evaluateStrength(pwd){
      if(!pwd) return 0;
      let score = 0;
      // length
      score += Math.min(40, pwd.length*2);
      // variety
      const hasLower = /[a-z]/.test(pwd);
      const hasUpper = /[A-Z]/.test(pwd);
      const hasNum = /[0-9]/.test(pwd);
      const hasSym = /[^A-Za-z0-9]/.test(pwd);
      const variety = [hasLower, hasUpper, hasNum, hasSym].filter(Boolean).length;
      score += variety * 15; // up to +60
      // penalty for common patterns (simple)
      if(/^(?:password|123456|qwerty|abcdef)/i.test(pwd)) score = Math.min(score, 20);
      return Math.min(100, score);
    }

    function updateUI(){
      const len = Number(lengthRange.value);
      lenLabel.textContent = len;
      const options = {
        lower: el('useLower').checked,
        upper: el('useUpper').checked,
        numbers: el('useNumber').checked,
        symbols: el('useSymbol').checked,
        avoidAmbig: el('avoidAmbig').checked
      };
      const p = generatePassword(len, options) || '— select at least one option —';
      passwordEl.textContent = p;
      const s = evaluateStrength(p);
      strengthBar.style.width = s + '%';
      let txt = 'Very weak';
      if(s>80) txt = 'Strong';
      else if(s>60) txt = 'Good';
      else if(s>35) txt = 'Weak';
      strengthText.textContent = 'Strength: ' + txt;
    }

    // initial render
    updateUI();

    // events
    lengthRange.addEventListener('input', updateUI);
    ['useLower','useUpper','useNumber','useSymbol','avoidAmbig'].forEach(id=> el(id).addEventListener('change', updateUI));

    regen.addEventListener('click', ()=>{
      updateUI();
    });

    copyBtn.addEventListener('click', async ()=>{
      try{
        await navigator.clipboard.writeText(passwordEl.textContent);
        copyBtn.textContent = 'Copied!';
        setTimeout(()=> copyBtn.textContent='Copy',1200);
      }catch(e){
        // fallback
        const ta = document.createElement('textarea'); ta.value = passwordEl.textContent; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); copyBtn.textContent='Copied!'; setTimeout(()=>copyBtn.textContent='Copy',1200);} catch(_) { alert('Copy failed — your browser blocked it.'); }
        ta.remove();
      }
    });

    // convenience: click password to select
    passwordEl.addEventListener('click', ()=>{
      const range = document.createRange(); range.selectNodeContents(passwordEl);
      const s = window.getSelection(); s.removeAllRanges(); s.addRange(range);
    });
