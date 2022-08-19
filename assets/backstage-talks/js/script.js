const main = document.querySelector('main');

window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    if (scrollPos > 1300) {
        main.classList.add('issue-5');
    } else {
        main.classList.remove('issue-5');
    }

    if (scrollPos > 2600) {
        main.classList.add('issue-4');
    } else {
        main.classList.remove('issue-4');
    }

    if (scrollPos > 4000) {
        main.classList.add('issue-3');
    } else {
        main.classList.remove('issue-3');
    }

    if (scrollPos > 5300) {
        main.classList.add('issue-2');
    } else {
        main.classList.remove('issue-2');
    }

    if (scrollPos > 6700) {
        main.classList.add('issue-1');
    } else {
        main.classList.remove('issue-1');
    }

    /* console.log(scrollPos); */
})