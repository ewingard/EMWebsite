//Nav Bar Version 2 -- non-functional
    // Toggle the text menu visibility
    if (textMenu.classList.contains('menu-hidden')) {
        textMenu.classList.replace('menu-hidden', 'menu-visible');
    } else {
        textMenu.classList.replace('menu-visible', 'menu-hidden');
    }

    // Ensure the textMenu's background is transparent
    textMenu.style.backgroundColor = 'transparent';

    // Update 'aria-expanded' attribute based on the navigation's visibility

// Attach the event listener to the button
document.querySelector('.menu-toggle').addEventListener('click', function() {
    myFunction(this);
});