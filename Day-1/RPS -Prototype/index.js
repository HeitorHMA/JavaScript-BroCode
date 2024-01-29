let options = ["ROCK","PAPER","SCISSORS"];
let machineChoice = options[Math.floor(Math.random()*3)];
console.log(machineChoice);
let userChoice;
let playerScore
let machineScore
do{
    userChoice = window.prompt ("Choose Between Rock,Paper or Scissors:")
}while(playerScore > 7|| machineScore>7)

if(userChoice == machineChoice){
    alert("That's a tie")

}
else if (userChoice > machineChoice){
    alert("You won this round")
    playerScore = playerScore++
}