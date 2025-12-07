// ----------------------
// Review Card Generator
// ----------------------
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';

    // Avatar
    const av = document.createElement('div');
    av.className = 'avatar';
    av.textContent = review.name.charAt(0).toUpperCase();

    // Main content
    const content = document.createElement('div');
    content.className = 'content';

    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = `
        <span class="name">${review.name}</span>
        <span class="date">${review.date}</span>
    `;

    const starsRow = document.createElement('div');
    starsRow.className = 'stars';
    starsRow.innerHTML = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

    const text = document.createElement('p');
    text.className = 'text';
    text.textContent = review.text;

    // ----------------------
    // Actions section
    // ----------------------
    const actions = document.createElement('div');
    actions.className = 'actions';

    // Like button
    const likeBtn = document.createElement('button');
    likeBtn.className = 'btn';
    likeBtn.innerHTML = `👍 <span class="likes"><span class="count">${review.likes}</span> Like</span>`;
    likeBtn.title = 'Like this review';

    likeBtn.addEventListener('click', () => {
        review.likes = (review.likes || 0) + 1;
        likeBtn.querySelector('.count').textContent = review.likes;
        likeBtn.classList.add('primary');
    });

    // Reply button
    const replyBtn = document.createElement('button');
    replyBtn.className = 'btn';
    replyBtn.textContent = 'Reply';
    replyBtn.addEventListener('click', () => {
        const reply = prompt('Write a short reply to ' + review.name + ':');
        if (reply) alert('Your reply (not sent): ' + reply);
    });

    actions.appendChild(likeBtn);
    actions.appendChild(replyBtn);

    content.appendChild(header);
    content.appendChild(starsRow);
    content.appendChild(text);
    content.appendChild(actions);

    card.appendChild(av);
    card.appendChild(content);

    return card;
}



// ----------------------
// Render All Reviews
// ----------------------
const reviewListEl = document.getElementById('reviewList');

function renderReviews() {
    reviewListEl.innerHTML = '';
    for (const r of reviews) {
        reviewListEl.appendChild(createReviewCard(r));
    }
}



// ----------------------
// Review List Data
// ----------------------
const reviews = [
    { name: "Ali", text: "Great product!", rating: 5, date: "Dec 5, 2025", likes: 2 },
    { name: "Sara", text: "Very useful.", rating: 4, date: "Dec 3, 2025", likes: 1 }
];

renderReviews();



// ----------------------
// Add New Review
// ----------------------
const addBtn = document.getElementById('addReview');

addBtn.addEventListener('click', () => {
    const name = document.getElementById('newName').value.trim() || 'User';
    const text = document.getElementById('newText').value.trim();
    const rating = Number(document.getElementById('newRating').value) || 5;

    if (!text) {
        alert('Please write a review.');
        return;
    }

    const newReview = {
        name,
        text,
        rating,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
        }),
        likes: 0
    };

    reviews.unshift(newReview);
    renderReviews();

    document.getElementById('newText').value = '';
});
