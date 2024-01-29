let number 
document.getElementById ("submitButton").onclick = function(){
    number = document.getElementById ("assignedNumber").value
    number = Number(number)
    document.getElementById ("round").textContent = `Your number rounded is ${Math.round(number)}`
    document.getElementById ("ceil").textContent = `Your number rounded up is ${Math.ceil(number)}`
    document.getElementById ("floor").textContent = `Your number rounded down is ${Math.floor(number)}`
    document.getElementById ("sqrt").textContent = `The square root of your number is ${Math.sqrt(number)}`
    document.getElementById ("sin").textContent = `The sin of this number is ${Math.sin(number)}`
    document.getElementById ("cos").textContent = `The cos of this number is ${Math.cos(number)}`
    
}
