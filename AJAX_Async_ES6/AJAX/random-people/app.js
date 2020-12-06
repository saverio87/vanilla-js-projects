import get from './utils/getElement.js';


const url = "https://www.randomuser.me/api/"

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');

const btns = [...document.querySelectorAll('.icon')];
// I'm using the spread operator to copy the values from whatever I'm getting from QuerySelectorAll (a node-list, or an array-like object) and transform them into items of an array

const getUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  // destructuring the array
  const person = data.results[0];

  console.log(data.results[0]);
  const { phone, email } = person;
  const { large: MIIIIIIIII} = ;
  const {} = ;
  const {} = ;
  const {} = ;
  const {} = ;

}

const showUser = () => {
  console.log('hello world');
  getUser();
}

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);


