var navToggle = document.querySelector('#main-nav-toggle');
var navList = document.querySelector('#main-nav-list');

// always check to see if elements exist before writing js involving those elements
if (navToggle && navList){
  navToggle.addEventListener('click', function(){
    //this checks to see if the element has the class of close on it
  if(navToggle.classList.contains('hamburger-close')){
    navToggle.classList.remove('hamburger-close');
    navList.classList.remove('open');
  } else {
    navToggle.classList.add('hamburger-close');
    navList.classList.add('open');
    }
  });
}
