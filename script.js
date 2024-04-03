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
  if (!buttons) return;

  // Set up click event listeners for each button
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add active class to clicked button
      this.classList.add("active");

      // Update image src
      const imgSrc1 = this.getAttribute("data-img-src1");
      const imgSrc2 = this.getAttribute("data-img-src2");
      document.getElementById("feature-image1").src = imgSrc1;
      document.getElementById("feature-image2").src = imgSrc2;
    });
  });

  // Automatically set the first button as active
  if (buttons.length > 0) {
    buttons[0].classList.add("active");
    // Optionally, set the image associated with the first button as visible
    const imgSrc1 = buttons[0].getAttribute("data-img-src1");
    const imgSrc2 = buttons[0].getAttribute("data-img-src2");
    document.getElementById("feature-image1").src = imgSrc1;
    document.getElementById("feature-image2").src = imgSrc2;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-resize");
  if (images.length < 2) return;

  // Function to resize images
  function resizeImages(leftBig) {
    if (leftBig) {
      images[0].style.width = "60%";
      images[1].style.width = "40%";
    } else {
      images[0].style.width = "40%";
      images[1].style.width = "60%";
    }
  }

  // Set default image sizes to 60/40 on page load
  resizeImages(true);

  // Mouse move event on the window to detect hover side
  window.addEventListener("mousemove", (e) => {
    const screenWidth = window.innerWidth;
    const hoverSideLeft = e.clientX < screenWidth / 2;
    resizeImages(hoverSideLeft);
  });

  // Click event to toggle images size
  let clickToggle = false; // Track the click toggle state
  window.addEventListener("click", () => {
    clickToggle = !clickToggle;
    resizeImages(clickToggle);
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 1, // Adjust the space between slides
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
    nextEl: ".swiper1-button-next", // Unique next button for Swiper 2
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

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
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
  toggle.addEventListener("click", () => {
    const ul = toggle.nextElementSibling;
    const isActive = toggle.classList.contains("active");

    // If the clicked accordion is already active, skip the collapsing animation
    if (isActive) {
      toggle.classList.remove("active");
      setTimeout(() => {
        ul.style.maxHeight = "0";
      }, 10); // Short delay before collapsing to allow any ongoing transition to adapt
    } else {
      // First, close any active accordion by resetting its maxHeight
      document.querySelectorAll(".accordion-toggle").forEach((t) => {
        if (t !== toggle) {
          t.classList.remove("active");
          t.nextElementSibling.style.maxHeight = "0";
        }
      });

      // Then, expand the clicked accordion
      toggle.classList.add("active");
      ul.style.paddingTop = "20px";
      ul.style.maxHeight = ul.scrollHeight + "px"; // Dynamically adjust maxHeight based on content
    }
  });
});

// Optional: close accordion when clicking outside
document.addEventListener("click", function (e) {
  const isToggle =
    e.target.matches(".accordion-toggle") ||
    e.target.closest(".accordion-toggle");
  if (!isToggle) {
    document.querySelectorAll(".accordion-toggle").forEach((toggle) => {
      toggle.classList.remove("active");
      toggle.nextElementSibling.style.maxHeight = "0";
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
  // Toggle active class to rotate arrow
  content.previousElementSibling.classList.toggle("active");
}
