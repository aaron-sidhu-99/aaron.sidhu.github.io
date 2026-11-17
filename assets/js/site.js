document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const imagePath = name => `assets/images/${name}`;

  function makeImage(filename, alt, className = "") {
    const img = document.createElement("img");
    img.src = imagePath(filename);
    img.alt = alt;
    img.loading = "lazy";
    img.className = className;
    img.onerror = () => {
      img.removeAttribute("src");
      img.classList.add("missing-image");
      img.alt = `Add image file: ${filename}`;
      img.insertAdjacentHTML("afterend", `<span class="missing-label">ADD IMAGE<br><small>${filename}</small></span>`);
    };
    return img;
  }

  const featured = document.getElementById("featured-projects");
  if (featured && window.projects) {
    projects.slice(0, 3).forEach((project, index) => {
      const card = document.createElement("a");
      card.className = `featured-card featured-${index + 1}`;
      card.href = "portfolio.html";
      const media = document.createElement("div");
      media.className = "featured-media";
      media.appendChild(makeImage(project.images[0], project.title));
      const meta = document.createElement("div");
      meta.className = "card-meta";
      meta.innerHTML = `<span>${project.category}</span><span>${project.year}</span>`;
      const title = document.createElement("h3");
      title.textContent = project.title;
      card.append(media, meta, title);
      featured.appendChild(card);
    });
  }

  const list = document.getElementById("portfolio-projects");
  const filters = document.getElementById("filters");
  const count = document.getElementById("project-count");
  const lightbox = document.getElementById("lightbox");

  if (!list || !window.projects) return;

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  let activeFilter = "All";
  let galleryImages = [];
  let activeImage = 0;

  function render() {
    list.innerHTML = "";
    const visible = projects.filter(p => activeFilter === "All" || p.category === activeFilter);
    if (count) count.textContent = `${String(visible.length).padStart(2, "0")} PROJECTS`;
    visible.forEach((project, index) => {
      const section = document.createElement("section");
      section.className = "project-section";
      const heading = document.createElement("div");
      heading.className = "project-heading";
      heading.innerHTML = `<div class="project-index">${String(index + 1).padStart(2, "0")} / ${project.year}</div>`;
      const titleBlock = document.createElement("div");
      const title = document.createElement("h2");
      title.textContent = project.title;
      const description = document.createElement("p");
      description.textContent = project.description;
      titleBlock.append(title, description);
      const category = document.createElement("span");
      category.className = "project-category";
      category.textContent = project.category;
      heading.append(titleBlock, category);
      const grid = document.createElement("div");
      grid.className = "image-scrapbook";
      project.images.forEach((filename, imageIndex) => {
        const button = document.createElement("button");
        button.className = `scrap-image scrap-${imageIndex % 4}`;
        button.type = "button";
        button.setAttribute("aria-label", `View ${project.title} image ${imageIndex + 1}`);
        button.appendChild(makeImage(filename, `${project.title} — image ${imageIndex + 1}`));
        button.addEventListener("click", () => openLightbox(project, imageIndex));
        grid.appendChild(button);
      });
      section.append(heading, grid);
      list.appendChild(section);
    });
  }

  if (filters) {
    categories.forEach(category => {
      const button = document.createElement("button");
      button.className = `filter-button${category === activeFilter ? " selected" : ""}`;
      button.textContent = category;
      button.addEventListener("click", () => {
        activeFilter = category;
        filters.querySelectorAll("button").forEach(b => b.classList.toggle("selected", b.textContent === category));
        render();
      });
      filters.appendChild(button);
    });
  }

  function openLightbox(project, imageIndex) {
    galleryImages = project.images.map((filename, i) => ({
      src: imagePath(filename),
      alt: `${project.title} — image ${i + 1}`,
      caption: `${project.title} · ${project.category} · ${project.year}`
    }));
    activeImage = imageIndex;
    showLightbox();
  }

  function showLightbox() {
    const item = galleryImages[activeImage];
    const img = lightbox.querySelector("img");
    img.src = item.src;
    img.alt = item.alt;
    lightbox.querySelector("figcaption").textContent = item.caption;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }
  function moveLightbox(direction) {
    activeImage = (activeImage + direction + galleryImages.length) % galleryImages.length;
    showLightbox();
  }
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => moveLightbox(-1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") moveLightbox(-1);
    if (e.key === "ArrowRight") moveLightbox(1);
  });

  render();
});
