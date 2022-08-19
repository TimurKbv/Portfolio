const nav  = document.querySelector('nav');
const main = document.querySelector('main');


/* Hide NAV */

const scrollPos = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => nav.classList.contains('hide');
let lastScroll = 0;
const defaultOffset = 200;


/* DARK THEME */
window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    /* Transparent nav */
    if(scrollPosition > 500) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }


    /* Dark Theme */
    if (scrollPosition > 1900) {
        main.classList.add('dark-theme');
    } else {
        main.classList.remove('dark-theme');
    }

    if (scrollPosition > 3500) {
        main.classList.remove('dark-theme');
    }

    /* Hide Nav */
    if(scrollPos () > lastScroll && !containHide() && scrollPos() > defaultOffset) {

        //scroll down
        nav.classList.add('hide');
        /* console.log('down');  */   

    } else if (scrollPos() < lastScroll && containHide()) {
        
        //scroll up
        nav.classList.remove('hide');
        /* console.log('up');  */
    }

    

    lastScroll = scrollPos();
    /* console.log(scrollPosition); */
});









/* window.addEventListener('scroll', () => {
    
    if(scrollPos () > lastScroll && !containHide()) {
        //scroll down
        nav.classList.add('hide');
        console.log('down');        
    } else if (scrollPos() < lastScroll && containHide()) {
        //scroll up
        nav.classList.remove('hide');
        console.log('up'); 
    }
    
    lastScroll = scrollPos();
}); */




/* WHITE TRANSPARENT NAV */
/* window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;

    if(scrollPos > 500) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }


    console.log(scrollPos);
    
}); */











