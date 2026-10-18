(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      return section ? { link: link, section: section } : null;
    })
    .filter(Boolean);

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  function updateCurrentSection() {
    if (!sections.length) return;
    var line = (header ? header.offsetHeight : 0) + 120;
    var current = null;
    sections.forEach(function (item) {
      if (item.section.getBoundingClientRect().top <= line) current = item;
    });
    sections.forEach(function (item) {
      if (item === current) {
        item.link.setAttribute("aria-current", "true");
      } else {
        item.link.removeAttribute("aria-current");
      }
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      updateHeader();
      updateCurrentSection();
    });
  }

  updateHeader();
  updateCurrentSection();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
})();
