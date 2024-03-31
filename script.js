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

// document.querySelectorAll(".feature-buttons button").forEach((button) => {
//   button.addEventListener("click", function () {
//     const imgSrc = this.getAttribute("data-img-src");
//     document.getElementById("feature-image").src = imgSrc;
//   });
// });

// document.querySelectorAll(".feature-buttons button").forEach((button) => {
//   button.addEventListener("click", function () {
//     // Remove active class from all buttons
//     document.querySelectorAll(".feature-buttons button").forEach((btn) => {
//       btn.classList.remove("active");
//     });

//     // Add active class to clicked button
//     this.classList.add("active");

//     // Update image src
//     const imgSrc = this.getAttribute("data-img-src");
//     document.getElementById("feature-image").src = imgSrc;
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".feature-buttons button");

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
