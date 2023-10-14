/**
 * Template Name: TheEvent
 * Updated: Jul 27 2023 with Bootstrap v5.3.1
 * Template URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  const navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 20;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  let mediasIsotope = document.querySelector(".medias-isotope");

  if (mediasIsotope) {
    let mediasFilter = mediasIsotope.getAttribute("data-medias-filter")
      ? mediasIsotope.getAttribute("data-medias-filter")
      : "*";
    let mediasLayout = mediasIsotope.getAttribute("data-medias-layout")
      ? mediasIsotope.getAttribute("data-medias-layout")
      : "masonry";
    let mediasSort = mediasIsotope.getAttribute("data-medias-sort")
      ? mediasIsotope.getAttribute("data-medias-sort")
      : "original-order";

    window.addEventListener("load", () => {
      let mediasIsotope = new Isotope(
        document.querySelector(".medias-container"),
        {
          itemSelector: ".medias-item",
          layoutMode: mediasLayout,
          filter: mediasFilter,
          sortBy: mediasSort,
        }
      );

      let menuFilters = document.querySelectorAll(
        ".medias-isotope .medias-flters li"
      );
      menuFilters.forEach(function (el) {
        el.addEventListener(
          "click",
          function () {
            document
              .querySelector(".medias-isotope .medias-flters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            mediasIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aos_init === "function") {
              aos_init();
            }
          },
          false
        );
      });
    });
  }

  /**
   * Init isotope layout and filters
   */
  function initIsotopeLayout() {
    document
      .querySelectorAll(".isotope-layout")
      .forEach(function (isotopeItem) {
        let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
        let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
        let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

        let initIsotope = new Isotope(
          isotopeItem.querySelector(".isotope-container"),
          {
            itemSelector: ".isotope-item",
            layoutMode: layout,
            filter: filter,
            sortBy: sort,
          }
        );

        isotopeItem
          .querySelectorAll(".isotope-filters li")
          .forEach(function (filters) {
            filters.addEventListener(
              "click",
              function () {
                isotopeItem
                  .querySelector(".isotope-filters .filter-active")
                  .classList.remove("filter-active");
                this.classList.add("filter-active");
                initIsotope.arrange({
                  filter: this.getAttribute("data-filter"),
                });
                if (typeof aosInit === "function") {
                  aosInit();
                }
              },
              false
            );
          });
      });
  }
  window.addEventListener("load", initIsotopeLayout);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Medias Slider
   */

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();
