const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const url = 'https://api.chucknorris.io/jokes/random'

btn.addEventListener('click', () => {
  getData(url)
  .then((response) => displayData(response))
  .catch((err) => console.log(err));
});

function getData(url) { 
  return new Promise((resolve,reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();
      xhr.onreadystatechange = function() {
        if(xhr.readyState !== 4) return;
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject({
            status: xhr.status,
            text: xhr.statusText
          });

        };
      }
  });

}

function displayData(data){
  const {value:joke, updated_at:joke_date} = JSON.parse(data);
  content.innerHTML = joke + `<br><br> Created on: <br>` + joke_date;
}