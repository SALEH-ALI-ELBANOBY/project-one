/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


const sections = Array.from(document.querySelectorAll("section"));
const menuBar = document.getElementById("navbar__list");
// Go to top btn 

const span = document.querySelector('.up')

// Hide header for scroll​
const header = document.querySelector(".page__header");

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrollin​
span.onclick= () => window.scrollTo({top:0, behavior:"smooth"});

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function ListItem() {
    for (section of sections) {
        nameSection = section.getAttribute('data-nav');
        linkSection = section.getAttribute('id');
        // Create item for ech one
        navItem = document.createElement('li');
        // Add the text item
        navItem.innerHTML = `<a class='menu__link' href='#${linkSection}'>${nameSection}</a>`;
        //Add List Item In The Menu
        menuBar.appendChild(navItem);
		
		
    }
}
// build the nav
ListItem();


// Add class 'active' to section when near top of viewport 

    window.addEventListener("scroll", LinkActive);
function LinkActive(){
  sections.forEach(section =>{
  const sectionTop = section.getBoundingClientRect().top;
 const link = document.querySelector(`a[href="#${section.id}"]`);
  if(sectionTop >= 0 && sectionTop <= 400){
    link.classList.add("active-link");
	section.classList.add('your-active-class');
 }else{
    link.classList.remove("active-link");
	section.classList.remove('your-active-class');
 }
});
}

// Scroll to anchor ID using scrollTO event
// 
/**
 * End Main Functions
 * Begin Events
 * 
*/

window.addEventListener('scroll', () =>{
	const scrollable = document.documentElement.scrollHeight - window.innerHeight;
	const scrolled = window.scrollY ;
	if ((scrolled) >= 3000 && scrollable) {
		header.style.display = "none";
		
	}
	else {
		header.style.display = "block";
		header.style.behavior = "smooth";
	}
})


// Build menu 

// Scroll to section on link click

window.onscroll = function () {
    if(this.scrollY >= 750) {
       span.classList.add("topShow");
    }else{
        span.classList.remove("topShow");
    }
}
// Set sections as active



