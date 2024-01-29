let randomNum
let min = 1
let max = 6
let roll = document.getElementById ("rollButton")
let result = document.getElementById ("result")

roll.onclick = function(){
    randomNum = Math.floor(Math.random() *max + min);
    result.textContent = `${randomNum}`
}