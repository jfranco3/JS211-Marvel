//first reqquire the dotenv config file
require("dotenv").config();

//this just checks to make sure SECRET_API-KEY is listed in the environment variables. Uncomment to see.
// console.log(process.env);

//put the secret key in the variable
const api_key = process.env.SECRET_API_KEY;

// console.log(api_key)

//copy/paste the API Code

const fetch = () => {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch(err =>console.log(error))
};
