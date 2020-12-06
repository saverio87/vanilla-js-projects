// Template Strings/Literals
// `` backticks above tab key left of 1 key
// tagged template

const author = "Some Author";
const statement = "Some Statement";

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`;
// By adding 'highlight' right before the template string, we are going to be able to pass said template string in the function 'highlight' (to run it through the function), and whatever we return in the function is going to be the value of the variable 'quote'
console.log(quote);

// function highlight(text,arg1,arg2){
//   console.log({ text, arg1, arg2 });
// };

// Instead of passing each variable inside the template literal as an argument (the templ. lit. could have 30 or 30 variables inside it), we can simply add one single variable that will act like an array by adding three dots (...) in front of it:

// function highlight(text,...variables){
//   console.log({ text, variables });
// };

function highlight(text,...variables){
  const awesomeText = text.map((item,index)=>{
    return `${item} <strong class="blue">${variables[index] || ""}</strong>
    `
  });
  return awesomeText.join("");
};

const result = document.getElementById("result");
result.innerHTML = quote;
