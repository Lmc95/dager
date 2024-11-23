const menu = document.querySelector('.header__nav');
const menuButtos = document.querySelectorAll('.header__nav a');
const btnMenu = document.getElementById('btn__menu');
const icoBtn = document.querySelector('#btn__menu i');
const btnAlert = document.querySelector('.btn__alert');
const alertMsj = document.querySelector('.alert__msj');

btnMenu.addEventListener('click', () => {
    if (!menu.classList.contains('header__nav-mobile-active')) {
        menu.classList.add('header__nav-mobile-active');
        icoBtn.classList.add('fa-xmark');
        icoBtn.classList.remove('fa-bars');
        document.body.style.overflow = 'hidden';
    } else {
        menu.classList.remove('header__nav-mobile-active');
        icoBtn.classList.add('fa-bars');
        icoBtn.classList.remove('fa-xmark');
        document.body.style.overflow = '';
    }
})

btnAlert.addEventListener('click', () => {
    if(!alertMsj.classList.contains('alert__msj-active')) {
        alertMsj.classList.add('alert__msj-active')
        setTimeout(() => {
            alertMsj.classList.remove('alert__msj-active')
        }, 3000);
    }
})

menuButtos.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('header__nav-mobile-active');
        icoBtn.classList.add('fa-bars');
        icoBtn.classList.remove('fa-xmark');
        document.body.style.overflow = '';
    })
});







