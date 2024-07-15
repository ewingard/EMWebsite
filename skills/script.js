//Nav Toggle
function myFunction(x) {
    x.classList.toggle("change");
}
//     // Toggle the text menu visibility
//     if (textMenu.classList.contains('menu-hidden')) {
//         textMenu.classList.replace('menu-hidden', 'menu-visible');
//     } else {
//         textMenu.classList.replace('menu-visible', 'menu-hidden');
//     }

//     // Ensure the textMenu's background is transparent
//     textMenu.style.backgroundColor = 'transparent';

//     // Update 'aria-expanded' attribute based on the navigation's visibility
//     
// }

// // Attach the event listener to the button
// document.querySelector('.menu-toggle').addEventListener('click', function() {
//     myFunction(this);
// });


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
const skills = {
    programming: ['Python', 'WebDevelopment', 'R + Tidyverse'],
    languages: ['English', 'Spanish'],
    creative: ['Photoshop', 'Drawing']
};

function displaySkills(label) {
    const skillMenu = document.getElementById('skill-menu');
    skillMenu.innerHTML = ''; // Clear previous content
    skillMenu.innerHTML = `<strong>${label.charAt(0).toUpperCase() + label.slice(1)} Skills:</strong><ul>` +
        skills[label].map(skill => `<li>${skill}</li>`).join('') +
        '</ul>';
    skillMenu.style.display = 'block'; // Show the skill menu
}

// Define the skills content for each area
const skillsContent = {
    programming: `<h2>Programming Skills</h2><p>Here's where you can dive into languages like Python, JavaScript, and C++.</p>`,
    languages: `<h2>Language Skills</h2><p>Fluency in English, Spanish, and Japanese.</p>`,
    creative: `<h2>Creative Skills</h2><p>Exploring creativity through Graphic Design, Photography, and Creative Writing.</p>`
};

document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', function(e) {
        e.preventDefault();
        const label = this.getAttribute('data-label');
        // Fetch and display the corresponding skills content
        const contentToShow = skillsContent[label];
        const skillMenu = document.querySelector('.info-column'); // Ensure this targets the correct element
        skillMenu.innerHTML = contentToShow;
        skillMenu.style.display = 'block'; // Make sure it's visible
    });
});