let characterArray = [];

window.onload = function () {
  fetchCharacterArray();
};

const fetchCharacterArray = () => {
  fetch(
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=db401cbffb2d9a1c358139e1a6df779d&hash=6ba2c16b46abe80e68ff52b6fcf92520&limit=10"
  )
    .then((response) => response.json())
    .then((post) => (characterArray = post.data.results))
    .then(() => console.log("LOOK HERE", characterArray));
};

const displayCharacters = () => {
  const allCharacters = document.getElementById("character-storage");

characterArray.map((post, index) => {
    console.log("INDEX", index, "POST", post);
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = `${post.thumbnail.path}.${post.thumbnail.extension}`;
    //  img.src = post.thumbnail.path + "." + post.thumbnail.extension   same as the line above
    const text = document.createTextNode(`#${index}, Title: ${post.name}:`);
    li.appendChild(text);
    allCharacters.append(li);
    allCharacters.append(img);
  });
}