// // Function to toggle translation of quote
// function translateQuote() {
//   var quote = document.getElementById("topQuote");
//   var originalQuote = "On peut allumer des dizaines de bougies &agrave; partir d'une seule sans abr&eacute;ger la vie. On ne diminue pas le bonheur en le partageant.";
//   var translatedQuote = "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.";
  
//   var currentText = quote.innerHTML.trim().replace(/\s+/g, ' '); // Trim and normalize spaces
//   var normalizedOriginalQuote = originalQuote.trim().replace(/\s+/g, ' ');
//   var normalizedTranslatedQuote = translatedQuote.trim().replace(/\s+/g, ' ');

//   console.log("Current innerHTML: ", currentText); // Log current innerHTML
//   console.log("Normalized Original Quote: ", normalizedOriginalQuote); // Log normalized original quote

//   // Toggle quote text
//   if (currentText === normalizedOriginalQuote) {
//     quote.innerHTML = translatedQuote;
//   } else {
//     quote.innerHTML = originalQuote;
//   }
// }

// function myFunction(x) {
//   x.classList.toggle("change");
// }

// // Toggle for mobile navigation menu
// function mobileNavToggle() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";  // Hide the menu
//   } else {
//     x.style.display = "block"; // Show the menu
//   }
// }

// // Navigation toggle for the hamburger menu
// document.getElementById('menuToggle').addEventListener('click', function() {
//   const textMenu = document.getElementById('textMenu');
//   const isExpanded = this.getAttribute('aria-expanded') === 'true';

//   // Toggle visibility of the menu with CSS classes
//   if (textMenu.classList.contains('menu-hidden')) {
//     textMenu.classList.replace('menu-hidden', 'menu-visible');
//   } else {
//     textMenu.classList.replace('menu-visible', 'menu-hidden');
//   }

//   // Update aria-expanded for accessibility
//   this.setAttribute('aria-expanded', !isExpanded);
// });

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

//Mobile Nav Toggle
function mobileNavToggle() {
var x = document.getElementById("myLinks");
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}
}
//End Mobile Nav