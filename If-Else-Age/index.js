let submitAgeButton = document.getElementById ("submitAgeButton");
let userAge;
let message= document.getElementById("message");
submitAgeButton.onclick = function(){
    userAge = document.getElementById ("userAge").value
    if(userAge >= 100){
        message.textContent = ("You're TOO old to enter this site")
    }
    else if(userAge >= 18){
        message.textContent = ("You're old enough to enter this site")
    }
    else if (userAge == 0){
        message.textContent = ("You can not enter,you just borned")
    }
    else if(userAge < 18){
        message.textContent = ("You must be 18+ to enter this site")
    }
    }
