const navLinkOne = document.querySelector('.nav-link-1');
const navLinkTwo = document.querySelector('.nav-link-2');
const navLinkThree = document.querySelector('.nav-link-3');
const navLinkFour = document.querySelector('.nav-link-4');

window.addEventListener('scroll', function () {
    let scrollPos = this.window.scrollY;


    if (scrollPos > 212) {
        navLinkOne.classList.add('nav-link-one');
    } else {
        navLinkOne.classList.remove('nav-link-one');
    }

    if (scrollPos > 480) {
        navLinkTwo.classList.add('nav-link-two');
    } else {
        navLinkTwo.classList.remove('nav-link-two');
    }

    if (scrollPos > 750) {
        navLinkThree.classList.add('nav-link-three');
    } else {
        navLinkThree.classList.remove('nav-link-three');
    }

    if (scrollPos > 1000) {
        navLinkFour.classList.add('nav-link-four');
    } else {
        navLinkFour.classList.remove('nav-link-four');
    }


    console.log(scrollPos);
});