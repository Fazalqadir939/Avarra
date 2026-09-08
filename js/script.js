// ===========================================================
// Velaxor — Studio Site Script
// ===========================================================

// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Email signup form handling.
// Once a real Formspree endpoint is set (see index.html, replace YOUR_FORM_ID),
// this lets the form POST normally. Until then, it fakes a success message
// locally so the page never looks broken during development.
document.querySelectorAll('.signup-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
        if (form.action.includes('YOUR_FORM_ID')) {
            e.preventDefault();

            const note = document.getElementById('form-note');
            const success = document.getElementById('form-success');

            if (success) success.style.display = 'block';
            if (note) note.style.display = 'none';

            form.reset();
            console.warn('Formspree endpoint not configured yet — replace YOUR_FORM_ID in index.html with your real form ID.');
        }
    });
});

// Lightbox: click a clip image to view it full-size
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.clip-slot img').forEach(function (img) {
    img.addEventListener('click', function () {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', function () {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
});