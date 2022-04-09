import options from './fetch';

function makeButton(array) {
  const keyboard = document.querySelector('[data-keyboard]');
  const div = document.createElement('div');
  div.classList.add('row');
  array.forEach((letter) => {
    const btn = document.createElement('button');
    btn.classList.add('key');
    btn.textContent = letter;
    div.appendChild(btn);
  });
  keyboard.appendChild(div);
}

const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
makeButton(row1);
makeButton(row2);
makeButton(row3);

async function fetchWrod() {
  const url = 'https://random-words-with-pronunciation.p.rapidapi.com/word';
  const data = await (await fetch(url, options)).json();
  console.log(data[0]);
}

fetchWrod();
