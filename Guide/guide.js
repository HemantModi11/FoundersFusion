const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
}

function previousSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
}

function autoSlide() {
  setInterval(() => {
    if (currentIndex < slides.length - 1) {
      nextSlide();
    } else {
      currentIndex = 0;
      updateSliderPosition();
    }
  }, 2000);
}

updateSliderPosition();
autoSlide(); 