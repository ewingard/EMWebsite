//Normal Nav Toggle
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
const skills = {
    programming: ['Python', 'WebDevelopment', 'R + Tidyverse'],
    languages: ['English', 'Spanish'],
    creative: ['Photoshop', 'Drawing']
};

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

// Alleged content resizer

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Image Map Resizer
    imageMapResize();

    // Nav Toggle
    document.getElementById('menuToggle').addEventListener('click', function() {
        this.classList.toggle("change");
        const textMenu = document.getElementById('textMenu');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        textMenu.classList.toggle('menu-hidden');
        textMenu.classList.toggle('menu-visible');
        this.setAttribute('aria-expanded', !isExpanded);
    });

    const skillsContent = {
        programming: `<h2>Programming Skills</h2><p>Here's where you can dive into languages like Python, JavaScript, and C++.</p>`,
        languages: `<h2>Language Skills</h2><p>Fluency in English, Spanish, and Japanese.</p>`,
        creative: `<h2>Creative Skills</h2><p>Exploring creativity through Graphic Design, Photography, and Creative Writing.</p>`
    };

    document.querySelectorAll('area').forEach(area => {
        area.addEventListener('click', function(e) {
            e.preventDefault();
            const label = this.getAttribute('data-label');
            const contentToShow = skillsContent[label];
            const skillMenu = document.querySelector('.info-column');
            skillMenu.innerHTML = contentToShow;
            skillMenu.style.display = 'block';
        });
    });
});
