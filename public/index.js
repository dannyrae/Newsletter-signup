let Dd = document.querySelector('.day')
let Hh = document.querySelector('.hour')
let Mm = document.querySelector('.minute')
let Ss = document.querySelector('.second')
let form = document.querySelector('form')
let input = document.querySelector('input')

let regex =  /^([a-z]+[a-z0-9-.]*)+@([a-z]*)+[.]+([a-z]{2,6})$/

let countDownDate = new Date("Jan 9, 2023 11:00:00").getTime();

var x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
  
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days < 10 && (days = "0" + days)
    hours < 10 && (hours = "0" + hours)
    minutes < 10 && (minutes = "0" + minutes)
    seconds < 10 && (seconds = "0" + seconds)

    Dd.innerHTML = days
    Hh.innerHTML = hours
    Mm.innerHTML = minutes
    Ss.innerHTML = seconds
  
}, 1000);

form.addEventListener('submit', (e) => {
    // e.preventDefault()
    // regex.test(input.value) ? input.value = "" : alert("false")
})