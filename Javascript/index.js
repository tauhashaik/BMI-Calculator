let height = document.querySelector('[data-height]').value
let weight = document.querySelector('[data-weight]').value
let display = document.querySelector('[data-answer]')
let button = document.querySelector('[data-calculate]')
button.addEventListener('click', calculate)

function calculate(){
    let height = document.querySelector('[data-height]').value;
    let weight = document.querySelector('[data-weight]').value;
    let answer = weight / (height**2)
    console.log(answer)
    display.value = answer
}