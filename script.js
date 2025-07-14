document.getElementById("themeToggle").onclick = function () {
  document.body.classList.toggle("dark");
};

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

window.onscroll = function () {
  document.getElementById("scrollTopBtn").style.display = window.scrollY > 200 ? "block" : "none";
};

document.getElementById("scrollTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function filterProjects(type) {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.style.display = type === 'all' || card.classList.contains(type) ? "block" : "none";
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});
