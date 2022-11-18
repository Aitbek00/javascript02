// const minus = document.getElementById('minus');
// const plus = document.getElementById('plus');
// const result = document.getElementById('result')
//
// let i = 0;
// plus.addEventListener('click', ev => {
//     i++
//     result.style.color = 'green'
//     result.innerHTML = i
// })
// minus.addEventListener("click", function (){
//     if (i > 0){
//         i--
//         result.style.color = 'red'
//         result.innerHTML = i
//     }
// })

// const posX = document.getElementById('posX');
// const posY = document.getElementById('posY');
// const box = document.getElementById('box');
// box.addEventListener('mousemove' , event => {
//     let x = event.screenX;
//     let y = event.screenY;
//     posX.innerHTML = x
//     posY.innerHTML = y
// })
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

let color = prompt("выберите цвет").toUpperCase()
if (color === "RED" || color === "КРАСНЫЙ"){
    red.style.backgroundColor = 'red'
    red.innerText = "STOP"
}else if (color === "YELLOW" || color === "ЖЕЛТЫЙ"){
    yellow.style.backgroundColor = 'yellow'
    yellow.innerText = "ready"
}else if (color === "GREEN" || color === "ЗЕЛЕННЫЙ"){
    green.style.backgroundColor = 'GREEN'
    green.innerText = "go"
} else {
    alert("ERROR")
}

