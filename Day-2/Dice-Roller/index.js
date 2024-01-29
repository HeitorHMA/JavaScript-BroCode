function rollDice(){
let numOfDice = document.getElementById("numOfDice").value
let diceValues = document.getElementById("diceValues")
let diceImages = document.getElementById("diceImages")
const values = []
const imgs = []


    for(i = 0 ; i< numOfDice ; i++){
        const value = Math.floor(Math.random() *6) +1;
        values.push(value);
        imgs.push(`<img src= "dice_images/${value}.png">`);
    }
    diceValues.textContent = values.join(", ")
    diceImages.innerHTML = imgs.join(" ")
}