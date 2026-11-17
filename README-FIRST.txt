ENGINEERING PORTFOLIO TEMPLATE — QUICK START
=============================================

WHAT'S INCLUDED
- index.html       Homepage with headshot, introduction and selected projects
- cv.html          CV page (edit the text and add your PDF)
- portfolio.html   Visual project scrapbook with category filters and image lightbox
- assets/css       Website styling
- assets/js        Project list and website behaviour
- assets/images    Put your JPEG and PNG images here

1. PERSONALISE YOUR NAME AND DETAILS
Open index.html, portfolio.html and cv.html in a text editor (VS Code is free).
Replace every instance of:
  YOUR NAME
with your name.
Replace the email address and introductory text with your own details.

2. ADD YOUR HEADSHOT
Put your portrait image in assets/images/ and name it:
  headshot.jpg
You can use .png too, but if you change the filename, update index.html.

3. ADD YOUR PROJECT IMAGES
Copy your .jpg, .jpeg and .png files into:
  assets/images/

Use short filenames with no spaces, for example:
  huracan-overview.jpg
  huracan-assembly.png
  tvc-bracket-fem.png

4. ADD PROJECT TITLES AND IMAGES
Open:
  assets/js/projects.js

Each project looks like this:

{
  title: "Liquid rocket engine",
  category: "Propulsion",
  year: "2026",
  description: "A short description of the work.",
  images: ["huracan-overview.jpg", "huracan-assembly.png"]
}

Change the title, category, year and description. Put the exact image filenames in the images list.
To add another project, copy one complete project block (including its comma separator) and edit it.
To add more images to a project, add filenames inside its images list.
The homepage automatically displays the first three projects.

5. ADD YOUR CV PDF
Put your PDF in the assets folder and name it:
  Your_Name_CV.pdf
Or change the link in cv.html to match your PDF filename.

6. PREVIEW THE WEBSITE
Double-click index.html to open it in your browser.
Navigate using the CV and Design portfolio links.
For best results, preview with an internet connection because the starter design loads its fonts from Google Fonts. The website otherwise still works offline using fallback fonts.

7. PUBLISH ON GITHUB PAGES
Upload ALL files and folders in this template to the ROOT of your existing
YOURUSERNAME.github.io repository. Keep the folder structure unchanged.
If index.html already exists, replace it with this one.
In GitHub: Settings > Pages > Deploy from a branch > main > /(root).
Wait for the deployment to finish, then refresh your website.

IMPORTANT
- GitHub Pages is public. Do not upload confidential employer/customer information.
- This template is static: no database, subscriptions, plugins or server required.
- Keep a local backup of the whole folder.
- Large images make the site slower. Export web copies around 2000–2600 px on the long edge, keeping your original full-resolution files separately.
- GT Alpina is a commercial font. If you have a licence, you can self-host its webfont files and add an @font-face rule in style.css. Do not upload unlicensed font files.
