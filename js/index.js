// Ouverture nav burger

const menu = document.querySelector(".navMenuUl");
const menuItems = document.querySelectorAll(".navMenuLink");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const burgerIcon = document.querySelector(".burgerIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    burgerIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    burgerIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

// transition ancres
let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}