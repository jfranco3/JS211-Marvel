let characterArray = [];

window.onload = function () {
  fetchCharacterArray();
};

const fetchCharacterArray = () => {
  fetch(
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=db401cbffb2d9a1c358139e1a6df779d&hash=6ba2c16b46abe80e68ff52b6fcf92520"
  )
    .then((response) => response.json())
    .then((post) => (characterArray = post.data.results))
    .then(() => console.log("LOOK HERE", characterArray));
};

const displayCharacters = () => {
  const allCharacters = document.getElementById("character-storage");
};

characterArray.map((character) => {
  const li = document.createElement("li");
  const text = document.createTextNode(`${post.name}`);
  li.appendChild(text)
  allCharacters.append(li)
});








//replace this API with whatever mines says to do
//fn log results in browsers windown
//fn creates elements insise all-posts ul, then append text inside it with
