let userAmount 
let totalAmount = document.getElementById ("displayAmount")
const submitValue = document.getElementById("submitAmo");

submitValue.onclick = function(){
    userAmount = document.getElementById("amount").value
    let discount= userAmount >= 100? 10 : 0 ; 
    totalAmount.textContent = (`Your total amount is ${ userAmount - userAmount * (discount / 100)}`)

}