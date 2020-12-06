// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

const p = document.querySelectorAll('p');
const result = document.getElementById('result');
const second = document.getElementById('second');

let newText = Array.from(p);
newText = newText.map(item => `<span>${item.textContent}</span>`).join(' ');

result.innerHTML = newText;

const text = Array.from(document.querySelectorAll('p'), item => {
  return `<span>${item.textContent}</span>`;
}).join(' ');

second.innerHTML = text;


const prettyGirls = [
  { id: 1, name: 'anna'},
  { id: 2, name: 'joey'},
  { id: 3, name: 'betty'},
  { id: 4, name: 'marylou'},
  { id: 5, name: 'paula'},
];

const betty = prettyGirls.find(prettyGirl => prettyGirl.name == "betty");

console.log(betty.name);

boilWater();
console.log('chop carrot');

function boilWater(){
  console.log('boiling...');
  setTimeout(()=> {
    console.log('done');
    console.log('add carrots');
    setTimeout(()=>{
      console.log('carrots done');
      console.log('add onions');
      setTimeout(()=>{
        console.log('onion done');
      },5000);
    }, 5000);
    console.log('chop onion')
  }, 10000);
}