
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const url = 'https://api.chucknorris.io/jokes/random'

btn.addEventListener('click', async () => {
  try {
    const data = await fetch(url);
    const response = await (data.json());
    displayData(response);
  } catch (error) {
    console.log(error);
  }
  
});

function displayData({value:joke, updated_at:joke_date}){
  content.innerHTML = joke + `<br><br> Created on: <br>` + joke_date;
}