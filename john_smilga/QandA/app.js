//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', function(){
    question.classList.toggle('show-text');

    // If the item does not match the article I click the
    // button on, I'll remove the show-text class from
    // the latter
    questions.forEach(function(item){
      if(item !== question){
        item.classList.remove('show-text');
      }
    })
  })
})


// traversing the dom

/* 

const btns = document.querySelectorAll('.question-btn');
btns.forEach(function(btn){
  btn.addEventListener('click', function(bottone) {
// Traversing the Dom - accessing the parent of the parent
// article.question > div.question-title > button.
// question-btn
    const question = bottone.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
}); 

*/


