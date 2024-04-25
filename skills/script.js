// Simplified and Corrected JavaScript
document.getElementById('menuToggle').addEventListener('click', function() {
  const icon = document.getElementById('menuIcon');
  const textMenu = document.getElementById('textMenu');
  const isExpanded = this.getAttribute('aria-expanded') === 'true';

  // Toggle the icon state
  if (icon.classList.contains('horizontal')) {
    icon.classList.replace('horizontal', 'vertical');
    icon.innerHTML = "&#x22EE;"; // Vertical ellipsis for the kebab menu
  } else {
    icon.classList.replace('vertical', 'horizontal');
    icon.innerHTML = "..."; // Horizontal ellipsis for the meatballs menu
  }

  // Directly set the background color to transparent
  icon.style.backgroundColor = 'transparent';

  // Toggle the text menu visibility
  if (textMenu.classList.contains('menu-hidden')) {
    textMenu.classList.replace('menu-hidden', 'menu-visible');
  } else {
    textMenu.classList.replace('menu-visible', 'menu-hidden');
  }

  // Ensure the textMenu's background is transparent
  textMenu.style.backgroundColor = 'transparent';

  // Update 'aria-expanded' attribute based on the navigation's visibility
  this.setAttribute('aria-expanded', !isExpanded);
});



    