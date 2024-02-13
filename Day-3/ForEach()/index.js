let fruits = ["apple","banana","coconut","orange"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}
function display(element){
    console.log(element)
}

