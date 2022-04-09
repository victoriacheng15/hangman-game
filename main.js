import options from './fetch';

function showWord(word) {
  const displayLetters = document.querySelector('[data-word]');
  [...word.toLowerCase()].forEach(letter => {
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.textContent = letter
    p.classList.add('invisible')
    li.classList.add('letter')
    li.appendChild(p)
    displayLetters.appendChild(li)
  })
}

async function fetchWrod() {
  const url = 'https://random-words-with-pronunciation.p.rapidapi.com/word';
  const data = await (await fetch(url, options)).json();
  console.log(data[0]);
  showWord(data[0].word)
}

fetchWrod();
