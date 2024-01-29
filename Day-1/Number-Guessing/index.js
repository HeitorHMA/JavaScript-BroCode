let aswer = Math.floor(Math.random()*100)
let userNumber;
do{
    userNumber = window.prompt("Try to guess the number:")
}while(userNumber ==="" || userNumber === null)



if(userNumber == aswer){
    alert("You guessed right!")
}
else if (isNaN(userNumber)) {
    alert(`${userNumber} is not an number`)
}
else if (userNumber<aswer){
    alert("Too low,press F5 to try again")
}
else if (userNumber>aswer){
    alert("Too high,press F5 to try again")
}
console.log(userNumber)
console.log(aswer)