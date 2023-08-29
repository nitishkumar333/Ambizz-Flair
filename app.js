const gridImages = document.querySelectorAll('.grid-image');
const threeImages = document.querySelectorAll('.coll');

gridImages.forEach(image => {
  gsap.set(image, { opacity: 0 });

  gsap.to(image, {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: image,
      start: 'top 90%',
      end: 'bottom 60%',
      scrub: true,
    }
  });
});


threeImages.forEach(image => {
  gsap.set(image, { opacity: 0 });

  gsap.to(image, {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: image,
      start: 'top 90%',
      end: 'bottom 60%', 
      scrub: true,
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector("header nav");
  function handler() {
    sidebar.classList.toggle("active");
  }
  toggleButton.addEventListener("click", handler);
});
