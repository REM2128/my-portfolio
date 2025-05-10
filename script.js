const pages = document.querySelectorAll("section");
const links = document.querySelectorAll(".menu a");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("href").slice(1);

    pages.forEach(p => {
      p.classList.add("hidden");
      if (p.id === target) p.classList.remove("hidden");
    });
  });
});
