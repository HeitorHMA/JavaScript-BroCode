let prices = [5, 10 ,15 ,30 ,70 , 100]
let total = prices.reduce(sum)
function sum(accumulator, element){
    return accumulator + element
}
console.log(total)