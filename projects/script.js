//Nav Toggle
function myFunction(x) {
    x.classList.toggle("change");
}

document.getElementById('menuToggle').addEventListener('click', function myFunction(x) {
    const textMenu = document.getElementById('textMenu');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    
    if (textMenu.classList.contains('menu-hidden')) {
        textMenu.classList.replace('menu-hidden', 'menu-visible');
      } else {
        textMenu.classList.replace('menu-visible', 'menu-hidden');
      }

    x.setAttribute('aria-expanded', !isExpanded);

});

// Panel Script
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Resize Coordinates for Image Size
//   document.addEventListener('DOMContentLoaded', function() {
//   const img = document.getElementById('responsive-image');
//   const originalWidth = 700; // original width of your image
//   const originalHeight = 500; // original height of your image
//   const areas = document.querySelectorAll('map[name="neuron-nav"] area');

//   function resizeMap() {
//     const currentWidth = img.clientWidth;
//     const currentHeight = img.clientHeight;
//     const widthRatio = currentWidth / originalWidth;
//     const heightRatio = currentHeight / originalHeight;

//     areas.forEach(area => {
//       const originalCoords = area.dataset.coords.split(',').map(Number);
//       const newCoords = originalCoords.map((coord, index) => {
//         return index % 2 === 0 ? coord * widthRatio : coord * heightRatio;
//       });
//       area.coords = newCoords.join(',');
//     });
//   }

//   // initial call to set map coordinates
//   resizeMap();

//   // adjust coordinates on window resize
//   window.addEventListener('resize', resizeMap);
// });