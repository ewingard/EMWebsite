document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const bannerClose = document.getElementById('bannerClose');

    // check local storage
    if (localStorage.getItem('bannerClosed') === 'true') {
        banner.style.display = 'none';
    }

    // add event listener to close button
    bannerClose.addEventListener('click', function() {
        banner.style.display = 'none';
        localStorage.setItem('bannerClosed', 'true');
    });
});
