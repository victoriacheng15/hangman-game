import options from './fetch';

async function fetchWrod() {
  const url = 'https://random-words-with-pronunciation.p.rapidapi.com/word';
  const data = await (await fetch(url, options)).json();
  console.log(data[0]);
}

fetchWrod();
