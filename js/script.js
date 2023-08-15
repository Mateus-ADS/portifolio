
const buttonMenu = document.querySelector('.material-symbols-outlined')
const menu = document.querySelector('#menu')
let progressHtml = document.querySelector('.progress-html')
let progressCss = document.querySelector('.progress-css')
let progressJs = document.querySelector('.progress-javascript')

let progresses = {
    progressStartValueHtml : 0,
    progressEndValueHtml : 40,
    speedHtml : 40,

    progressStartValueCss : 0,
    progressEndValueCss : 30,
    speedCss : 60,

    progressStartValueJs : 0,
    progressEndValueJs : 30,
    speedJs : 60,


}

setTimeout(()=> {
    let progress = setInterval(()=> {
   
        progresses.progressStartValueHtml++
        progressHtml.textContent = `${progresses.progressStartValueHtml}%`
        if(progresses.progressStartValueHtml == progresses.progressEndValueHtml) {
            clearInterval(progress)
        }
    }, progresses.speedHtml)
},1500)

setTimeout(()=> {
    let progress = setInterval(()=> {
        progresses.progressStartValueCss++
        progressCss.textContent = `${progresses.progressStartValueCss}%`
        if(progresses.progressStartValueCss == progresses.progressEndValueCss){
            clearTimeout(progress)
        }
    },progresses.speedCss)
    
},1400)

setTimeout(() => {
    let progress = setInterval(()=> {
        progresses.progressStartValueJs++
        progressJs.textContent = `${progresses.progressStartValueJs}%`
        if(progresses.progressStartValueJs == progresses.progressEndValueJs) {
            clearTimeout(progress)
        }
    },progresses.speedJs)
},1350)

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




