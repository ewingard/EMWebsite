# EMWebsite_v2

Version 2 (upgraded CSS/styling) of my personal portfolio website. I used [v1](https://ewingard.xyz/workshop/v1_website/) to help me learn HTML, CSS, and JavaScript. In this version, I'm using JavaScript to create a more dynamic website.

I'm moving away from computer science and neuroscience and more into the humanities sphere, and I want my personal website to reflect that through styling and theme, while maintaining (and upgrading) my skills in coding.

# Website Sections
Several website pages have changed theming and user interface since EMWebsite_v1. Methods outlined below.

## Homepage
Styling for the homepage includes a "typewriter"-style animation of my name being typed out. The front-page styling is in the form of a newspaper, with a blurb included for each page's contents to assist with navigation and finding the correct page. Updates moved from Projects (v1) to the main page (v2). The old site architecture is linked and accessible to peruse inside v2.

### Skills and Experience
This page mimics Excel theming (heavy inspiration) and uses JavaScript to import and create the workbook view. There are five tabs:
- Background: 
- Skills: Excel table listing all skills and skill metadata (years of experience, proficiency, skill title, skill category, skill type)
- Dashboard view importing/reusing skill information from the skills tab using Chart.js
- Certificates: shows certificates and microcredentials received
- Awards: listing any/all awards, scholarships, and recognition recieved. 

Navigation tabs in the header are used as navigation for the remaining portfolio pages (i.e., homepage, projects, publications, etc.) and a link to my CV on Google Drive (publicly viewable/downloadable). For the dashboard, total skills, unique skill domains, and average self-rated proficiency of skills is listed. Bar, Donut, and Radar charts are included to visualize skills information.

Current ambition for this page is to work on a filter/sort system to filter the skills and certificates tab based on data (years of experience, year the certificate was obtained, sort by proficiency, etc.).

The mobile view reduces the amount of information displayed on desktop to a few columns (2-3, depending on the page).

### About Me
Windows 95 (nostalgia-fueled) theme with interests, favorites, and a MS Paint copycat that allows you to draw on the canvas and save your beautiful artwork to your device.

### Projects
Bookshelf-inspired page with each project having its own book. Publications are wrapped into the projects page. All books are animated with page flips and the page has woodgrain texture and leather texture to add some depth. Some books have charts or tables of contents that link to other project books (opened in a new page).

#### Art Camp Project
Instead of floating squares of artwork, I have taken public domain images of frames from The Met, the National Gallery, and the Art Institute of Chicago's Open Access programs. Those frames were processed in Photoshop to remove any whitespace (transformed into transparency). I also added a loading screen with animation for both desktop and mobile because the frames can take a little while to download. Instructions are included to either scroll or swipe to view the artwork. Frames were then arranged in a row, and any art will scroll into frame. For mobile friendly view, all art is routed into a single frame and can be swiped to view other pieces instead of using scroll. Number of art pieces included in the art gallery view to maintain even amounts across all three frames was reduced from 50 to 45. All 50 original art files are still included in assets.

#### FortuneTeller Quiz
This quiz was imported from the old website version and has not been changed. Accessible via the projects page.

### GitHub
GitHub as an official "page link" in navigation is maintained, but on the homepage it is no longer included as a large link. Instead, GitHub can be accessed among the other social media icons.