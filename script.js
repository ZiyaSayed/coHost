const menuButton= document.querySelector('#menuButton');

const navList= document.querySelector('.navList');

menuButton.addEventListener('click', () =>
{
    navList.classList.toggle('show');
});