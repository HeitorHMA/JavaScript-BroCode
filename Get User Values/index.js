let userName;

document.getElementById("submitName").onclick = function(){
   userName = document.getElementById("userText").value;
   document.getElementById("myH1").textContent = `Hello ${userName}`
}