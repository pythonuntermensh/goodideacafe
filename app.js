//navbar
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}); 

//modal-contacts
const modal = document.getElementById('contacts-modal');
const openBtn = document.querySelectorAll('.contacts-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.forEach((btn) => btn.addEventListener('click', () => {
    modal.style.display = 'block';
}));

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
