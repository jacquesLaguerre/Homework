// const make = "ford "
// const model = "focus "

// function isMakeAndModel (car){
// return (make + model)
// }

// console.log("The vehicle make and model is ", isMakeAndModel(make + model))

const car = {
    make : "Ford",
    model: "Focus", 
}
function makeAndModel () {
console.log('This vehicle ')
}


 // A refaire 
let fruits = [
    "strawberry", 
    "kiwi", 
    "banana", 
    "raspberry", 
    "dragonfruit",
]

function getFruit (index){
    return fruits [index]; 
}
//console.log (getFruit(1))

//The right way 

// function getSecondElement (arr){
//     console.log(arr[1])
// }
// getSecondElement (fruits) ; 


// const f = 73 
// function convert  (f){
//     return f-32
// }
// console.log(convert `${f} is` 

function convert (oz){
    return (oz)/ 16
}

console.log((`${80} is oz ${convert(80)} pint.`))
console.log((`${80} is oz ${convert(80)} pint.`))
