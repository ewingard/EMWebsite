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

//Skills Labels
const skills = {
    code: ['Python', 'WebDevelopment', 'R + Tidyverse'],
    languages: ['English', 'French'],
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

//Skills in my Brain
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
    code: `<h2>Programming Skills</h2><p>I have experience working with multiple languages, including (but not limited to) HTML (<i class="fa-brands fa-html5" style="color: #000000;"></i>), CSS (<i class="fa-brands fa-css3-alt" style="color: #000000;"></i>), JavaScript (<i class="fa-brands fa-js" style="color: #000000;"></i>), Java (<i class="fa-brands fa-java" style="color: #000000;"></i>), Prolog, Python (<i class="fa-brands fa-python" style="color: #000000;"></i>), MATLAB , and R (<i class="fa-brands fa-r-project" style="color: #000000;"></i>) .</p>`,
    languages: `<h2>Language Skills</h2><p>I am a native English speaker, with near-fluency (CEFR C1 or advanced-low level) in French. I am in the beginning stages of learning Spanish.</p>`,
    creative: `<h2>Creative Skills</h2><p>I am an artist and I love to draw! I also have experience teaching art through the New Bethel Foundation's Art and Creative Writing Summer Camp. I have gotten some experience through my work as a Research Assistant under Dr. Caitlin Hudac using Photoshop for stimulus creation.</p>`,
    webdev: `<h2>Website Development Skills</h2><p>I am currently using this website for project-based learning of webdev skills including HTML (<i class="fa-brands fa-html5" style="color: #000000;"></i>), CSS (<i class="fa-brands fa-css3-alt" style="color: #000000;"></i>), and JavaScript (<i class="fa-brands fa-js" style="color: #000000;"></i>).</p>`,
    undefined: `<h2>Undefined Area</h2><p>This area is under construction at the moment. Please check back soon for more details!</p>`,
    research: `<h2>Research Skills</h2><p>I am currently working under Dr. Caitlin Hudac in the B-RAD Lab. I've been familiarizing myself with REDCap database management, EEG techniques (inlcuding programming in E-Basic for E-Prime task creation and refinement, using NetStation software), participant recruitment and data managment procedures.</p>`,
    data: `<h2>Data Management Skills</h2><p>I am extremely familiar with R (<i class="fa-brands fa-r-project" style="color: #000000;"></i>) and accompanying packages (most notably the tidyverse package and the lavaan package). I am also familiar with using MATLAB for fMRI behavioral data analysis, and SPSS for general-purpose psychology data analysis.</p>`
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

// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize Image Map Resizer
//     imageMapResize();

//     // Nav Toggle
//     document.getElementById('menuToggle').addEventListener('click', function() {
//         this.classList.toggle("change");
//         const textMenu = document.getElementById('textMenu');
//         const isExpanded = this.getAttribute('aria-expanded') === 'true';
//         textMenu.classList.toggle('menu-hidden');
//         textMenu.classList.toggle('menu-visible');
//         this.setAttribute('aria-expanded', !isExpanded);
//     });

//     const skillsContent = {
//         programming: `<h2>Programming Skills</h2><p>Here's where you can dive into languages like Python, JavaScript, and C++.</p>`,
//         languages: `<h2>Language Skills</h2><p>Fluency in English, Spanish, and Japanese.</p>`,
//         creative: `<h2>Creative Skills</h2><p>Exploring creativity through Graphic Design, Photography, and Creative Writing.</p>`,
//         webdev: `<h2>Website Development Skills</h2><p>I am currently using this website to learn webdev skills including HTML, CSS, and JavaScript.</p>`,
//         undefined: `<h2>Undefined Area</h2><p>This area is under construction at the moment. Please check back soon for more details!</p>`
//     };

//     document.querySelectorAll('area').forEach(area => {
//         area.addEventListener('click', function(e) {
//             e.preventDefault();
//             const label = this.getAttribute('data-label');
//             const contentToShow = skillsContent[label];
//             const skillMenu = document.querySelector('.info-column');
//             skillMenu.innerHTML = contentToShow;
//             skillMenu.style.display = 'block';
//         });
//     });
// });
