
const buttonMenu = document.querySelector('.material-symbols-outlined')
const menu = document.querySelector('#menu')

buttonMenu.addEventListener('click',() => {
    menu.classList.toggle('show')
})

function changedSize() {
    if(window.innerWidth >= 910) {
        if(menu.classList.contains('show')) {
            menu.classList.remove('show')
        }
    }
}


