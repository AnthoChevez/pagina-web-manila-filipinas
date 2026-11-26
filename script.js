document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const quizForm = document.querySelector("#quiz-form");
  const result = document.querySelector("#quiz-result");

  if (!quizForm || !result) return;

  const questions = 5;

  const updateScore = () => {
    const answers = [...quizForm.querySelectorAll("input[type='radio']:checked")];
    const score = answers.filter((answer) => answer.value === "correct").length;
    const answered = answers.length;

    if (answered < questions) {
      result.textContent = `Has respondido ${answered} de ${questions}. Completa todas las preguntas para ver tu resultado.`;
      return;
    }

    const messages = [
      "Sigue explorando: Manila todavía guarda muchos secretos.",
      "¡Buen trabajo! Ya conoces varios rincones de la capital.",
      "¡Excelente! Tu conocimiento sobre Manila es sobresaliente."
    ];
    const message = score < 3 ? messages[0] : score < 5 ? messages[1] : messages[2];
    result.textContent = `Tu puntuación es ${score}/${questions}. ${message}`;
  };

  quizForm.addEventListener("change", updateScore);
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateScore();
  });
  quizForm.addEventListener("reset", () => {
    window.setTimeout(() => {
      result.textContent = "Selecciona tus respuestas para conocer tu puntuación.";
    }, 0);
  });
});
