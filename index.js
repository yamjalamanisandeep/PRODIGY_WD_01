
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6347'; 
    });

    link.addEventListener('mouseout', () => {
        link.style.color = ''; 
    });
});

const cartButtons = document.querySelectorAll('.button');
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
       alert('Item added to cart!');
    });
});

