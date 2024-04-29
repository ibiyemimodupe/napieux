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

// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".feature-buttons button");
//   if (!buttons) return;

//   buttons.forEach((button) => {
//     button.addEventListener("click", function () {
//       buttons.forEach((btn) => {
//         btn.classList.remove("active");
//       });

//       this.classList.add("active");

//       const imgSrc1 = this.getAttribute("data-img-src1");
//       const imgSrc2 = this.getAttribute("data-img-src2");
//       document.getElementById("feature-image1").src = imgSrc1;
//       document.getElementById("feature-image2").src = imgSrc2;
//     });
//   });

//   if (buttons.length > 0) {
//     buttons[0].classList.add("active");
//     // Optionally, set the image associated with the first button as visible
//     const imgSrc1 = buttons[0].getAttribute("data-img-src1");
//     const imgSrc2 = buttons[0].getAttribute("data-img-src2");
//     document.getElementById("feature-image1").src = imgSrc1;
//     document.getElementById("feature-image2").src = imgSrc2;
//   }
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const images = document.querySelectorAll(".image-resize");
//   if (images.length < 2) return;

//   function resizeImages(leftBig) {
//     if (leftBig) {
//       images[0].style.width = "60%";
//       images[1].style.width = "40%";
//     } else {
//       images[0].style.width = "40%";
//       images[1].style.width = "60%";
//     }
//   }

//   resizeImages(true);

//   window.addEventListener("mousemove", (e) => {
//     const screenWidth = window.innerWidth;
//     const hoverSideLeft = e.clientX < screenWidth / 2;
//     resizeImages(hoverSideLeft);
//   });

//   let clickToggle = false;
//   window.addEventListener("click", () => {
//     clickToggle = !clickToggle;
//     resizeImages(clickToggle);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Split(["#feature-image1", "#feature-image2"], {
  //   sizes: [30, 70], // Initial size ratios in percentages
  //   minSize: [200, 100], // Minimum sizes in pixels
  //   gutterSize: 10, // Size of the gutter in pixels
  //   cursor: "col-resize", // Cursor type on gutter hover
  // });

  // Existing button functionality to update images
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
    buttons[0].click(); // Auto-select the first button
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const splitInstance = Split(["#split-0", "#split-1"], {
//     sizes: [80, 20], // Initial size ratios
//     minSize: [100, 300], // Minimum sizes in pixels
//     gutterSize: 10, // Gutter size
//     cursor: "col-resize",
//     onDrag: setDisplayProperties, // Sets display properties on drag
//   });

//   // Set initial display properties based on initial setup
//   setDisplayProperties(splitInstance.getSizes());

//   // Function to set display properties during dragging and on initial load
//   function setDisplayProperties(sizes) {
//     const panel1 = document.getElementById("split-0");
//     const panel2 = document.getElementById("split-1");
//     const imgContainer1 = panel1.querySelector(".feature-split1-img");
//     const imgContainer2 = panel2.querySelector(".feature-split2-img");
//     const text1 = panel1.querySelector(".feature-split-text");
//     const text2 = panel2.querySelector(".feature-split-text");

//     updatePanelDisplay(imgContainer1, text1, sizes[0]);
//     updatePanelDisplay(imgContainer2, text2, sizes[1]);
//   }

//   // Update display based on current panel size
//   function updatePanelDisplay(imgContainer, text, size) {
//     if (size < 40) {
//       imgContainer.style.display = "none"; // Hide image container
//       text.style.width = "100%"; // Expand text to full width
//     } else {
//       imgContainer.style.display = "block"; // Show image container
//       text.style.width = "auto"; // Revert text width
//     }
//   }
// });

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
  toggle.addEventListener("click", () => {
    const ul = toggle.nextElementSibling;
    const isActive = toggle.classList.contains("active");

    if (isActive) {
      toggle.classList.remove("active");
      setTimeout(() => {
        ul.style.maxHeight = "0";
      }, 10);
    } else {
      document.querySelectorAll(".accordion-toggle").forEach((t) => {
        if (t !== toggle) {
          t.classList.remove("active");
          t.nextElementSibling.style.maxHeight = "0";
        }
      });

      toggle.classList.add("active");
      ul.style.paddingTop = "20px";
      ul.style.maxHeight = ul.scrollHeight + "px";
    }
  });
});

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

// $(document).ready(function () {
//   $(".accordion-toggle").click(function () {
//     // Toggle the current panel and close others
//     $(this).next("ul.fds").slideToggle("medium").toggleClass("open");
//     $(".fds").not($(this).next()).slideUp("medium").removeClass("open");

//     // Toggle arrow rotation
//     $(this).toggleClass("rotate-arrow");
//     $(".accordion-toggle").not(this).removeClass("rotate-arrow");
//   });

//   // Close all panels if user clicks outside
//   $(document).click(function (e) {
//     if (!$(e.target).closest(".hero-footer-text").length) {
//       $(".fds").slideUp("medium").removeClass("open");
//       $(".accordion-toggle").removeClass("rotate-arrow");
//     }
//   });
// });

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
    default_offset_pct: 0.6, // Adjust if you want different starting split point
    orientation: "horizontal", // 'horizontal' or 'vertical'
  });
});
