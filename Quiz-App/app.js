let questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Makeup Language", "Hyper Text Markup Language", "High Text Marking Language", "None"],
        answer: 1
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C++", "Python", "JavaScript"],
        answer: 3
    },
    {
        question: "When will be university road project Completed?",
        options: ["2035", "2040", "2050", "Never"],
        answer: 3
    },
    {
        question: "Whats the S stand for?",
        options: ["Hope", "Warning", "Aura", "Logo"],
        answer: 2
    },
    {
        question: "Who is the founder of Pakistan?",
        options: ["Quaid-e-Azam", "General Asim Muneer", "Maryam Nawaz", "Asif Zardari"],
        answer: 0
    }
];

let index = 0;
let score = 0;

function loadQuestion() {
    let q = questions[index];
    document.getElementById("question").innerText = q.question;

    q.options.forEach((opt, i) => {
        document.getElementById("opt" + i).innerText = opt;
        document.getElementById("opt" + i).classList.remove("correct", "wrong");
        document.getElementById("opt" + i).disabled = false;
    });
}

function selectOption(selected) {
    let correct = questions[index].answer;

    if (selected === correct) {
        document.getElementById("opt" + selected).classList.add("correct");
        score++;
    } else {
        document.getElementById("opt" + selected).classList.add("wrong");
        document.getElementById("opt" + correct).classList.add("correct");
    }

    // disable all buttons after choosing
    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).disabled = true;
    }
}

function nextQuestion() {
    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML = `
            <h2>Your Score: ${score} / ${questions.length}</h2>
            <button onclick="location.reload()">Restart</button>
        `;
    }
}

loadQuestion();
