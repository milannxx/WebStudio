const openBtn = document.getElementById('openModal');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeModal');


function classToggle() {
    overlay.classList.toggle('modal-active')
}

openBtn.addEventListener('click', function(){
    classToggle()
})

closeBtn.addEventListener('click', function(){
    classToggle()
})