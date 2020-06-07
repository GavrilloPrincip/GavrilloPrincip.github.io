/* responsive navbar */
const navMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navlist = document.querySelector('.nav-list');
    navbarToggler.addEventListener('click',()=>{
        navlist.classList.toggle('nav-active');
        navbarToggler.classList.toggle('toggle');
    })
    navlist.addEventListener('click',()=>{
        navlist.classList.toggle('nav-active');
    })
};
navMenu()

/* sevcies slider */

const serviceChange = () =>{
    let firstChild, lastChild;
    const arrowLeft = document.querySelector('#arrow-left');
    const arrowRight = document.querySelector('#arrow-right');
    const servicesAll = document.querySelector('#services-slider')

    document.addEventListener('click', () =>{
        if (event.target == arrowLeft){
            lastChild = servicesAll.lastElementChild;
            servicesAll.insertAdjacentElement('afterbegin', lastChild)
        }else if (event.target == arrowRight){
            firstChild = servicesAll.firstElementChild;
            servicesAll.insertAdjacentElement('beforeend',firstChild)
        }
    })
}
serviceChange();






























/* SCROLL REVEAL */

ScrollReveal().reveal('.ani-left',{
    origin:'left',
    distance:'10rem',
    duration:1000,
    easing: 'ease-in',
    });
ScrollReveal().reveal('.ani-right',{
    origin:'right',
    distance:'10rem',
    duration:1000,
    easing: 'ease-in',
    });
ScrollReveal().reveal('.ani-fade-up',{
    opacity:0,
    easing: 'ease-in',
    });
ScrollReveal().reveal('.ani-bottom',{
    origin:'bottom',
    distance:'10rem',
    duration:1000,
    easing: 'ease-in',
    });
ScrollReveal().reveal('.ani-top',{
    origin:'top',
    distance:'10rem',
    duration:1000,
    easing: 'ease-in',
    });
ScrollReveal().reveal('.ani-early',{
    delay:500,
});
ScrollReveal().reveal('.ani-delay',{
    delay:750,
});
ScrollReveal().reveal('.ani-late',{
    delay:1000,
});
