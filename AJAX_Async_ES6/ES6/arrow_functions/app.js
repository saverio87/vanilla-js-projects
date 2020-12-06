// Arrow Functions or Fat Arrow Functions
// no name
// no function keyword
// parameters and return statement
//no parameters

// function sayHi() {
//   console.log("hello");
// }
// sayHi();
// const hello = function(name) {
//   console.log(`Hello ${name}`);
// };
// hello("bob");
// one parameter
// function triple(value) {
//   return value * 3;
// }

const hello = () => console.log("hello");
hello();

const double = value => value * 2;
const num = double(4);
console.log(num);
console.log(double(3));

// two parameters and more than one line
const multiply = (num1, num2) => {
  const result = num1 * num2;
  // more code here
  return result;
};
const sum = multiply(3, 4);
console.log(sum);

// return object
const object = () => ({ name: "bob", age: 25 });
const person = object();
console.log(person);

// arrow functions as callback functions.
// The following two functions have the exact same functionality:

var numbers = [1, 2, 3, 4, 5, 6];

const big = numbers.filter(function(x){
  return x > 2;
});
console.log(big);

const big2 = numbers.filter(x => x > 2);
console.log(big2);

// just testing things out here

const arr = []
numbers.forEach(x => {
  arr.push(x);
});

console.log(numbers);

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log("you clicked me"));
