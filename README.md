### Academic Personal Website

This repository contains a static, responsive and modern personal website template for an academic. The site is designed to be deployed easily to any static web host (e.g. GitHub Pages, Netlify or a university server) and provides a clean, mobile‑friendly way to present information about a researcher or lecturer.

## Features

* **Single‑page layout** – All sections (Home, About, Publications, Research Areas, Education and Contact) live on one page with smooth scrolling navigation.
* **Responsive design** – The layout adapts gracefully to desktop, tablet and mobile devices. A collapsible hamburger menu appears on smaller screens.
* **Clean colour palette** – Uses a white, blue and grey colour scheme with subtle accents to maintain an elegant, professional appearance.
* **Custom imagery** – AI‑themed background and illustration images are included in the images/ folder. These were generated specifically for the template so you can use them freely or replace them with your own.
* **Animation effects** – Sections slide smoothly into view as the user scrolls, thanks to the use of the IntersectionObserver API and CSS transitions.
* **Easy customisation** – All of the content areas contain placeholder text. You can replace them with your own biography, publication list, research fields, education history and contact details by editing index.html.

## File structure

```
website/
├── images/
│   ├── ai_background.png   # Hero section background
│   └── ai_head.png         # Illustration used in the About section
├── index.html              # Main HTML file containing all sections
├── style.css               # Stylesheet defining the look and feel
├── script.js               # JavaScript for menu toggling and animations
└── README.md               # This documentation file
```

### index.html

The HTML document defines the overall structure of the site. It includes a fixed navigation bar with anchor links to each section and uses semantic section tags (e.g., `<section id="about">`) for clarity. Each content area contains placeholder text in Turkish that you should replace with your own information.

### style.css

The stylesheet sets up a CSS custom property–driven colour palette and uses flexbox to align elements. Media queries ensure that the layout remains usable on smaller devices. A few basic animations are defined with the @keyframes rule to fade content into view. You can adjust colours and spacing by modifying the root variables at the top of this file.

### script.js

The JavaScript file adds two pieces of interactivity:

* **Mobile navigation** – When the screen width is below 768px, the navigation bar collapses into a hamburger menu. Clicking the menu icon toggles the visibility of the navigation links.
* **Scroll reveal** – As you scroll down the page, sections that are about to enter the viewport receive a `.show` class, triggering a fade‑in animation. This is implemented using the IntersectionObserver API for efficiency.

## Getting started

Clone the repository to your local machine:

```
git clone <repository-url>
cd <repository-name>/website
```

Open `index.html` in your browser to see the site. No build tools are required.

Customise the content by editing the placeholder text in `index.html`. Replace the dummy biography, publications, research areas, education entries and contact information with your own details.

Change the images (optional). If you’d like to use different photos or illustrations, place your files in the `images/` directory and update the `<img>` tags and CSS `background-image` declarations accordingly.

Deploy. Once you are happy with the site, push the files to a GitHub repository. If you are using GitHub Pages, ensure that the root of your pages site contains `index.html`, `style.css`, `script.js` and the `images/` folder. GitHub Pages will automatically serve the site.

## 🚧 Future improvements

This template is intended as a starting point. Possible enhancements include:

* Adding a JSON file to drive the content dynamically or pulling your publication list from an external source (e.g., Google Scholar or ORCID via an API).
* Including a blog section or news feed to post updates about your research.
* Integrating contact form handling via a serverless service (such as Netlify Forms) if you need actual message delivery.


## 👤 Developer

**Bektaş Sarı**<br>
PhD in Advertising, AI + Creativity researcher<br>
Flutter Developer & Software Educator<br>

- **Email:** [bektas.sari@gmail.com](mailto:bektas.sari@gmail.com)  
- **LinkedIn:** [linkedin.com/in/bektas-sari](https://www.linkedin.com/in/bektas-sari)  
- **Researchgate:** [researchgate.net/profile/Bektas-Sari-3](https://www.researchgate.net/profile/Bektas-Sari-3)  
- **Academia:** [independent.academia.edu/bektassari](https://independent.academia.edu/bektassari)

Feel free to reach out if you have questions or suggestions regarding this template.
