let header = document.querySelector('header')
let nav = document.querySelector('nav')
let main = document.querySelector('main')
let toggle = document.querySelector('.toggle')

toggle.onclick = function(){
    header.classList.toggle('active')
    nav.classList.toggle('active')
    main.classList.toggle('active')
    toggle.classList.toggle('active')
}
