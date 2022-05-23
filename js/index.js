const button = document.querySelector("[data-js='button']");

function showAnswer() {
  const answer = document.querySelector("[data-js='answer']");
  answer.classList.toggle('card__answer');

  if (this.innerText === 'Show Answer') {
    this.innerText = 'Hide Answer';
  } else {
    this.innerText = 'Show Answer';
  }
}
button.addEventListener('click', showAnswer);

//Import functions
// import { bookmarks } from './bookmarks.js';
import { buildNav } from './navigation.js';

//Run functions
// bookmarks();
buildNav();
