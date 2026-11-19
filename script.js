
// ========================================
// MOBILE NAVIGATION
// ========================================

// Select the menu button and navigation links
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav-links');

// Toggle the mobile navigation menu
menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');

    menuButton.setAttribute(
        'aria-expanded',
        String(open)
    );
});

// Close the mobile menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');

        menuButton.setAttribute(
            'aria-expanded',
            'false'
        );
    });
});


// ========================================
// AUTOMATIC COPYRIGHT YEAR
// ========================================

// Update the footer with the current year
document.querySelector('#year').textContent =
    new Date().getFullYear();


// ========================================
// IMAGE LIGHTBOX
// ========================================

// Select the lightbox and its image element
const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');

// Open the lightbox when a gallery image is clicked
document.querySelectorAll('[data-full]').forEach(button => {
    button.addEventListener('click', () => {

        // Set the full-size image source
        lightboxImage.src = button.dataset.full;

        // Copy the image description for accessibility
        lightboxImage.alt = button.querySelector('img').alt;

        // Display the lightbox
        lightbox.showModal();
    });
});


// ========================================
// CLOSE LIGHTBOX
// ========================================

// Close the lightbox using the X button
lightbox.querySelector('.close-lightbox')
    .addEventListener('click', () => {
        lightbox.close();
    });

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
        lightbox.close();
    }
});
