let students = [16 ,16 ,17 ,19, 19 , 18, 20, 21]

let adults = students.filter(isAdult)

function isAdult(element){
   return element >= 18 ;
}
console.log(adults)