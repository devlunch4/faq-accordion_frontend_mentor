const questions = document.querySelectorAll(".accordion-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const isOpen = question.getAttribute("aria-expanded") === "true";

    // Close all
    questions.forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.nextElementSibling.classList.remove("show");
      const icon = btn.querySelector(".icon");
      icon.src = "images/icon-plus.svg";
      icon.alt = "expand";
    });

    // If not open, open this one
    if (!isOpen) {
      question.setAttribute("aria-expanded", "true");
      question.nextElementSibling.classList.add("show");
      const icon = question.querySelector(".icon");
      icon.src = "images/icon-minus.svg";
      icon.alt = "collapse";
    }
  });
});
