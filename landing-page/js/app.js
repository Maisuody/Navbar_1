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
 * Define Global Variables
 * 
*/


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

const unorder1= document.querySelector('.navbar__menu ul');
const AllSection = document.querySelectorAll('section');
//const header = document.querySelector('.navbar__menu')
console.log(AllSection.length);
for(let i=0; i< AllSection.length; i++)
{
	//Create list, then adding link 
	const newLink = document.createElement('li');
	const newL = document.createElement('a');

	let R= 1+i; //to add section number
	
	// Scroll to section on link click
	newL.setAttribute("href", `#section${R}`);
	//add attribute to add all style
	newL.setAttribute("class", "current");
	newL.textContent= 'Section' +R;
	newLink.appendChild(newL);
	
	unorder1.appendChild(newLink);
}




// Build menu 



// Scroll to anchor ID using scrollTO event
//Intersection observer Function

//Change navigation style on scroll
window.addEventListener('scroll', event => { 
    let nav = document.querySelector('.page__header'); 
    
    (window.scrollY >= 50) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
});

//Active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});