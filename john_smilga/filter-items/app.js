const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const buttonContainer = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
  displayMenuButtons();
  });

// filter items

function displayMenuItems(menuItems){

  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt="${item.title}">
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`
  });

displayMenu = displayMenu.join("");
sectionCenter.innerHTML = displayMenu;

}

function displayMenuButtons () {

  // Using the method .reduce we loop over the array
  // and we add unique categories (item.category) to the 
  // final/resulting array, which is stored in the argument values
  // and consequently in the constant categories. We give the final
  // array an initial value, ['all']
  const categories = menu.reduce(
    function(values,item){
      if(!values.includes(item.category)){
        values.push(item.category);
      }
      return values;
  },['all']);

    const categoryBtns = categories.map(function(category){
      return `<button class="filter-btn" 
      type="button" data-id="${category}">${category}</button>`
      // here I loop over the "categories" array and I return a
      // dynamic button for each item in the array. The data-id
      // and the title of these buttons are named after the items
      // in the categories array. Finally, we join the HTML for these
      // button into one big string using the method .join()
    }).join('');
    buttonContainer.innerHTML = categoryBtns;

    // Here I select the buttons (after they've been dynamically created)
    const filterBtns = document.querySelectorAll('.filter-btn');
    // Here I loop over the buttons array and pass it a function that filters
    // the articles to be returned based on the category, that is it only
    // returns the items (objects literal) whose 'category' attribute matches
    // the button's HTML "data-id=" attribute
    
    filterBtns.forEach(function(bottone){
      bottone.addEventListener('click',function(e){
        const category = e.currentTarget.dataset.id;
    
        const menuCategory = menu.filter(filterItems);
    
        function filterItems(menuItem){
          if (menuItem.category === category) {
            return menuItem;
          }
        }
    
        if(category === "all") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      })
    })

}