const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const url = 'https://api.chucknorris.io/jokes/random'

btn.addEventListener('click', () => {
  getData(url);

});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = function() {
    if(xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      const {value:joke, updated_at:joke_date} = JSON.parse(xhr.responseText);
      content.textContent = joke + `<br>` + joke_date;
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusTexts
      })
    }
    ;
  }
}