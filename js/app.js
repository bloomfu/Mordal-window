// Get the modal element
const modal = document.getElementById("modal");

// Get the trigger button
const trigger = document.getElementById("trigger");

// Get the close button
const closeBtn = document.querySelector(".close");

// When the user clicks on the trigger button, show the modal
trigger.addEventListener("click", function () {
  modal.style.display = "block";
});

// When the user clicks on the close button, hide the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Prevent scrolling when modal is open
let isModalOpen = false;
modal.addEventListener("scroll", function (event) {
  if (isModalOpen) {
    event.preventDefault();
    event.stopPropagation();
    modal.scrollTop = 0;
  }
});

// Set isModalOpen flag to true when modal is opened
modal.addEventListener("animationstart", function (event) {
  if (event.animationName === "fadeIn") {
    isModalOpen = true;
  }
});

// Set isModalOpen flag to false when modal is closed
modal.addEventListener("animationend", function (event) {
  if (event.animationName === "fadeOut") {
    isModalOpen = false;
  }
});
