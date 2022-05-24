export function toggleAnswer() {
  const allAnswerButtons = document.querySelectorAll("[data-js='button']");

  allAnswerButtons.forEach(answerButton => {
    answerButton.addEventListener('click', toggle);
  });

  function toggle() {
    const answer = this.nextElementSibling;
    answer.classList.toggle('hidden');

    if (this.innerText === 'Show Answer') {
      this.innerText = 'Hide Answer';
    } else {
      this.innerText = 'Show Answer';
    }
  }
}
