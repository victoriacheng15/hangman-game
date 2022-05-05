import options from './fetch';

// set up localStorage
function storeWord (word, definition, array) {
  const obj = {
    word,
    definition,
    chances: 9,
    array: [...array]
  }
  localStorage.setItem('game', JSON.stringify(obj))
}

// get localStorage
const getGame = () => JSON.parse(localStorage.getItem('game'));

function displayChance() {
  const game = getGame()
  const numOfChances = document.querySelector('[data-chance]')
  numOfChances.textContent = game.chances
}

function displayWord() {
  const word = getGame().array
  const displayWordArr = document.querySelector('[data-word')
  word.map(letter => {
    const li = document.createElement('li')
    li.classList.add('letter')
    li.textContent = letter
    console.log(li);
    displayWordArr.appendChild('li')
  })
}

async function getWord() {
  try {
    const url = 'https://random-words-with-pronunciation.p.rapidapi.com/word'
    const data = await (await fetch(url, options)).json()
   
    storeWord(data[0].word, data[0].definition, data[0].word)
    displayChance()
    displayWord()

  } catch (error) {
    console.log(error);
  }
}

getWord()