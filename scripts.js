// scripts.js
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileIcon = document.querySelector('.mobile-menu-icon');
    const isMenuVisible = mobileMenu.style.display === 'block';

    mobileMenu.style.display = isMenuVisible ? 'none' : 'block';
    mobileIcon.classList.toggle('active', !isMenuVisible);
}

$(document).ready(function() {
    // Stijlen toepassen op de actieve tab bij het laden van de pagina
    $('.nav-pills .nav-link.active').css({
        'background-color': '#FFA500',
        'color': '#000000'
    });

    // Stijlen toepassen wanneer een nieuwe tab wordt geselecteerd
    $('.nav-pills .nav-link').on('shown.bs.tab', function() {
        $('.nav-pills .nav-link').css({
            'background-color': '',
            'color': ''
        });
        $(this).css({
            'background-color': '#FFA500',
            'color': '#000000'
        });
    });
});