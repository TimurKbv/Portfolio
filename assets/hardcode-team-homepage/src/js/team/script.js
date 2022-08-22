
const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".nav-link")




/* ---------------------------HEADER ----------------------*/

 /* "bei scroll function" */
window.addEventListener("scroll", checkScroll);

/* Check der webseite fürs effect */
document.addEventListener("DOMContentLoaded", checkScroll);


function checkScroll() {
    let scrollPos = this.window.scrollY;    

    if (scrollPos > 0) {
        header.classList.add("transparent-header");
    } else {
        header.classList.remove("transparent-header");
    }
    console.log(scrollPos);
}


/* -------------Aside NAV---------------- */


navLinks.forEach(function(item) {
    item.addEventListener("click", function(){
        let currentLink = item;

        navLinks.forEach(function(item) {
            item.classList.remove('active');
        })

        currentLink.classList.add('active');

    });
});

/* for (let items of navLinks) {
    items.classList.add('')
} */



















