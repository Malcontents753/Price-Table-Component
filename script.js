document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".get-started-btn");
  const formSection = document.querySelector(".intake-form-section");
  const closeBtn = document.querySelector(".close-btn");

  // Open form on Get Started
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      formSection.classList.remove("hidden");
    });
  });

  // Close form on X click
  closeBtn.addEventListener("click", () => {
    formSection.classList.add("hidden");
  });
});