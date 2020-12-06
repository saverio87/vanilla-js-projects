// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const numbers = [23, 45, 66, 88, 2345];

console.log(Math.max(...numbers));

const john = ['john', 'bob', 'sanders', 'anne', 'michael'];

const sayHello = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
};

sayHello(...john);
// If the function takes 2 argument and the array has more than 2 items (in this case it has 3), every other item gets ignored

const numbers2 = [23, 45, 51, 66, 88, 2345, 12300];

primiTre = Math.max(...numbers2.slice(0,3));

console.log(primiTre);

