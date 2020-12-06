const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const url = 'https://api.chucknorris.io/jokes/random'

btn.addEventListener('click', () => {
  fetch(url)
  .then((data) => data.json())
  .then(response => displayData(response))
  // .json() is in the _Prototype of the response object. From the .json() we can get another promise
  .catch((err) => console.log(err));
});

function displayData({value:joke, updated_at:joke_date}){
  content.innerHTML = joke + `<br><br> Created on: <br>` + joke_date;
}