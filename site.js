(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var body = document.body;
  var sidebar = document.getElementById("sidebar");
  var toggle = document.getElementById("contents-toggle");
  var scrim = document.querySelector(".nav-scrim");
  var backToTop = document.querySelector(".back-to-top");
  var mobileQuery = window.matchMedia("(max-width: 900px)");

  function setNavigation(open, returnFocus) {
    body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));

    if (open) {
      var firstLink = sidebar.querySelector("a");
      if (firstLink) firstLink.focus();
    } else if (returnFocus) {
      toggle.focus();
    }
  }

  toggle.addEventListener("click", function () {
    setNavigation(!body.classList.contains("nav-open"), false);
  });

  scrim.addEventListener("click", function () {
    setNavigation(false, true);
  });

  sidebar.addEventListener("click", function (event) {
    if (mobileQuery.matches && event.target.closest("a")) {
      setNavigation(false, false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && body.classList.contains("nav-open")) {
      setNavigation(false, true);
      return;
    }

    if (event.key === "Tab" && body.classList.contains("nav-open")) {
      var sidebarLinks = sidebar.querySelectorAll("a");
      var lastLink = sidebarLinks[sidebarLinks.length - 1];
      if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault();
        toggle.focus();
      } else if (event.shiftKey && document.activeElement === toggle) {
        event.preventDefault();
        lastLink.focus();
      }
    }
  });

  mobileQuery.addEventListener("change", function (event) {
    if (!event.matches) setNavigation(false, false);
  });

  var tableWrappers = [];

  document.querySelectorAll("#main-content table").forEach(function (table) {
    if (table.parentElement.classList.contains("table-scroll")) return;

    var wrapper = document.createElement("div");
    wrapper.className = "table-scroll";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
    tableWrappers.push(wrapper);
  });

  function updateScrollableTables() {
    tableWrappers.forEach(function (wrapper) {
      var isScrollable = wrapper.scrollWidth > wrapper.clientWidth + 1;
      if (isScrollable) {
        wrapper.tabIndex = 0;
        wrapper.setAttribute("role", "region");
        wrapper.setAttribute("aria-label", "Scrollable data table");
      } else {
        wrapper.removeAttribute("tabindex");
        wrapper.removeAttribute("role");
        wrapper.removeAttribute("aria-label");
      }
    });
  }

  window.addEventListener("resize", updateScrollableTables);
  updateScrollableTables();

  var navLinks = Array.from(sidebar.querySelectorAll('a[href^="#"]'));
  var observedTargets = navLinks.map(function (link) {
    return document.getElementById(link.hash.slice(1));
  }).filter(Boolean);

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      if (link.hash === "#" + id) {
        link.setAttribute("aria-current", "location");
        var linkRect = link.getBoundingClientRect();
        var sidebarRect = sidebar.getBoundingClientRect();
        if (linkRect.top < sidebarRect.top || linkRect.bottom > sidebarRect.bottom) {
          link.scrollIntoView({ block: "nearest" });
        }
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && observedTargets.length) {
    var visibleTargets = new Map();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visibleTargets.set(entry.target.id, entry.boundingClientRect.top);
        } else {
          visibleTargets.delete(entry.target.id);
        }
      });

      if (visibleTargets.size) {
        var current = Array.from(visibleTargets.entries()).sort(function (a, b) {
          return Math.abs(a[1]) - Math.abs(b[1]);
        })[0][0];
        setActiveLink(current);
      }
    }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });

    observedTargets.forEach(function (target) {
      observer.observe(target);
    });
  }

  function updateBackToTop() {
    var isVisible = window.scrollY > 700;
    backToTop.classList.toggle("is-visible", isVisible);
    backToTop.tabIndex = isVisible ? 0 : -1;
    backToTop.setAttribute("aria-hidden", String(!isVisible));
  }

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
}());
