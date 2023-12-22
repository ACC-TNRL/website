// scripts.js
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileIcon = document.querySelector('.mobile-menu-icon');
    const isMenuVisible = mobileMenu.style.display === 'block';

    mobileMenu.style.display = isMenuVisible ? 'none' : 'block';
    mobileIcon.classList.toggle('active', !isMenuVisible);
}
