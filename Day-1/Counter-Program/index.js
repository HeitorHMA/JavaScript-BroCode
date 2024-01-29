const reset = document.getElementById("reset");
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const countLabel = document.getElementById("countLabel");
count = 0

reset.onclick= (function(){
    count = 0
    countLabel.textContent = count
})

add.onclick= (function(){
    count = ++count
    countLabel.textContent = count
})

minus.onclick= (function(){
    count = --count
    countLabel.textContent = count
})
