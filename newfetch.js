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

const displayCharacters = (array) => {
  const allCharacters = document.getElementById("character-storage");

  array.map((post, index) => {
    console.log("INDEX", index, "POST", post);
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = `${post.thumbnail.path}.${post.thumbnail.extension}`;
    //  img.src = post.thumbnail.path + "." + post.thumbnail.extension   same as the line above
    img.style="height: 200px"
    const text = document.createTextNode(`#${index}, Title: ${post.name}:`);
    li.appendChild(text);
    allCharacters.append(li);
    allCharacters.append(img);
  });
};

//declare empty haveCharArray. set charArr to include characters i want. set timeout to run code after previous code.
let haveCharacterArray= [];
setTimeout(() => {
    haveCharacterArray = [
    characterArray[0],
    characterArray[1],
    characterArray[2],
  ];
  console.log("HAVE CHARACTERS", haveCharacterArray);
}, 500);

//declare empty wantCharArr. use.find to return characters i want. use.push to bring character into wantCharArr. 
const wantCharacterArray = [];
setTimeout(() => {
  wantCharacterArray.push(
    characterArray.find((element) => element.name === "Absorbing Man")
  );
  console.log("WANT CHARACTERS", wantCharacterArray[0].name);
}, 500);

setTimeout(() => {
  wantCharacterArray.push(
    characterArray.find((element) => element.name === "Adam Destine")
  );
  console.log("WANT CHARACTERS", wantCharacterArray[1].name);
}, 500);



//UNIT TESTING for:
// Mistyped address
// fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=db401cbffb2d9a1c358139e1a6df779d&hash=6ba2c16b46abe80e68ff52b6fcf92520&limit=10")
// .then(
//   resp => resp.json() // this returns a promise
// ).then(x => {
//   for (x) {
//   }
// })


// Out of range request
// const fetchBooks = async () => {
//   try {
//       const response: Response = await fetch(
//         "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=db401cbffb2d9a1c358139e1a6df779d&hash=6ba2c16b46abe80e68ff52b6fcf92520&limit=10")

//       if (response.status === 10) {
//           set(await response.json());
//           setErrorMessage(undefined);
//       } else if (response.status === 404) {
//           setErrorMessage('The server could not find this page.');
//       } else {
//           setErrorMessage('The server did not respond the data we wanted.');
//       }
//   } catch (cause) {
//       setErrorMessage('We were unable not retrieve anything due to connection problems.');
//   }
// };

// Wrong API key