function closeMenu() {
  document.querySelector(".nav-links").classList.remove("active");
  document.querySelector(".line1").classList.remove("toggle");
  document.querySelector(".line2").classList.remove("toggle");
  document.querySelector(".line3").classList.remove("toggle");
}

document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".line1").classList.toggle("toggle");
  document.querySelector(".line2").classList.toggle("toggle");
  document.querySelector(".line3").classList.toggle("toggle");
});

window.addEventListener("scroll", closeMenu);

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".feature-buttons button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      const imgSrc1 = this.getAttribute("data-img-src1");
      const imgSrc2 = this.getAttribute("data-img-src2");
      document.getElementById("feature-image1").src = imgSrc1;
      document.getElementById("feature-image2").src = imgSrc2;
    });
  });

  if (buttons.length > 0) {
    buttons[0].click();
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 1,
  navigation: {
    nextEl: ".swiper1-button-next",
    prevEl: ".swiper1-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
  },
});

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const currentlyActiveAccordionButton = document.querySelector(
      ".accordion-button.active"
    );
    const accordionContent = button.nextElementSibling;

    if (
      currentlyActiveAccordionButton &&
      currentlyActiveAccordionButton !== button
    ) {
      currentlyActiveAccordionButton.classList.toggle("active");
      currentlyActiveAccordionButton.nextElementSibling.style.maxHeight = null;
    }

    button.classList.toggle("active");
    if (button.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = null;
    }
  });
});

document.querySelectorAll(".accordion-toggle").forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const ul = this.nextElementSibling;
    const isActive = this.classList.contains("active");

    // Close all other accordions
    document.querySelectorAll(".accordion-toggle").forEach((otherToggle) => {
      if (otherToggle !== this) {
        otherToggle.classList.remove("active");
        otherToggle.nextElementSibling.style.maxHeight = null;
        otherToggle.nextElementSibling.style.paddingBottom = "0";
      }
    });

    // Toggle current accordion
    if (isActive) {
      this.classList.remove("active");
      ul.style.maxHeight = null;
      ul.style.paddingBottom = "0";
    } else {
      this.classList.add("active");
      ul.style.paddingBottom = "20px";
      ul.style.maxHeight = ul.scrollHeight + "px";
    }
  });
});

document.addEventListener("click", function (e) {
  if (
    !e.target.matches(".accordion-toggle") &&
    !e.target.closest(".accordion-toggle")
  ) {
    document.querySelectorAll(".accordion-toggle").forEach((toggle) => {
      toggle.classList.remove("active");
      toggle.nextElementSibling.style.maxHeight = null;
      toggle.nextElementSibling.style.paddingBottom = "0";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let node = document.querySelector("#main-slider-1");
  if (!node) return;

  // Slider 1
  var splide1 = new Splide("#main-slider-1", {
    type: "loop",
    width: 600,
    height: 700,
    pagination: false,
    arrows: false,
    cover: true,
    breakpoints: {
      768: {
        width: "100%",
        height: 300,
        arrows: false,
      },
    },
  });

  var thumbnails1 = document.getElementsByClassName("thumbnail-1");
  var current1;

  for (var i = 0; i < thumbnails1.length; i++) {
    initThumbnail1(thumbnails1[i], i);
  }

  function initThumbnail1(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      splide1.go(index);
    });
  }

  splide1.on("mounted move", function () {
    var thumbnail = thumbnails1[splide1.index];

    if (thumbnail) {
      if (current1) {
        current1.classList.remove("is-active");
      }

      thumbnail.classList.add("is-active");
      current1 = thumbnail;
    }
  });

  splide1.mount();
});

function toggleDropdown(id) {
  var content = document.getElementById(id);
  content.style.display = content.style.display === "block" ? "none" : "block";

  content.previousElementSibling.classList.toggle("active");
}

// function toggleDropdown(id) {
//   var content = document.getElementById(id);
//   // Get all dropdown contents
//   var allContents = document.querySelectorAll('.dropdown-content');

//   // Loop through all dropdown contents
//   for (var i = 0; i < allContents.length; i++) {
//     // If it's the current content, toggle its display
//     if (allContents[i] === content) {
//       content.style.display = content.style.display === "block" ? "none" : "block";
//       // Toggle active class for the dropdown item
//       content.previousElementSibling.classList.toggle("active");
//     } else {
//       // Hide other dropdowns and remove the active class
//       allContents[i].style.display = "none";
//       allContents[i].previousElementSibling.classList.remove("active");
//     }
//   }
// }

$(window).on("load", function () {
  $(".twentytwenty-container").twentytwenty({
    default_offset_pct: 0.6,
    orientation: "horizontal",
  });
});
