// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
  // linksContainer.classList.toggle("show-links"); <-- can use this if we are
  // not using dynamic links
  const containerHeight = linksContainer.getBoundingClientRect().height;
 // the height here is going to be 0, we hard-coded it in the CSS page
  const linksHeight = links.getBoundingClientRect().height;
  if(containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    console.log(linksContainer.style.height)
  } else{
    linksContainer.style.height = 0;
    console.log(linksContainer.style.height)
  }
}
)
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

// ********** fixed navbar ************


window.addEventListener('scroll',function(){
  const scrollHeight = window.pageYOffset;
  console.log(scrollHeight);
  const navHeight = navbar.getBoundingClientRect().height;
if(scrollHeight > navHeight){
  navbar.classList.add('fixed-nav');
} else {
  navbar.classList.remove('fixed-nav');
}

// Now we want to make the top-link button visible whenever
// we scroll past 500 pixels or so

if(scrollHeight > 500){
    topLink.classList.add('show-link')
  } else {
  topLink.classList.remove('show-link');
  }

}
)
// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function(link){
  link.addEventListener('click',function(e){
    // First we want to prevent the default behavior, which does
    // send us to the section we want, but it scrolls past
    // it. Also, the link menu doesn't close automatically
    e.preventDefault();
    // Navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    // Using slice I can get a slice, or part, of the href attribute
    // By using '1', I am asking it to start from the index of 1, that
    // is to skip the first character, the hashtag
    const element = document.getElementById(id);
    let position = element.offsetTop;

    //offsetTop returns a value for the top of that element in pixels
    window.scrollTo({
      left:0,
      top:position,
    });
    linksContainer.style.height = 0;
  });
});