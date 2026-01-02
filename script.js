const openBtn = document.getElementById('openModal');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeModal');


function classToggle() {
    overlay.classList.toggle('modal-active')
}

openBtn.addEventListener('click', function () {
    classToggle()
})

closeBtn.addEventListener('click', function () {
    classToggle()
})

// burger.js
const burgerBtn = document.querySelector('.header_menu');
const mobileMenu = document.querySelector('#mobileMenu');
const closeEls = mobileMenu?.querySelectorAll('[data-close]');

function openMenu() {
    if (!mobileMenu || !burgerBtn) return;
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    if (!mobileMenu || !burgerBtn) return;
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

burgerBtn?.addEventListener('click', openMenu);

closeEls?.forEach((el) => el.addEventListener('click', closeMenu));

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});
