// let a = "5";
// var b =5;
// const c = 5;
// // c = 6
// // a="sameer"

// // console.log(a)
// console.log(a+b)

// if(true){
//     console.log("I am a Developer")
// }
// else{
//     console.log("Support")
// }

// for(let i=0; i<8; i++){
//     console.log(i*2)
// }
// console.log(i)

// functions 
//ES5
// function add(a,b){
//     console.log(a+b)
// }
// add(3,3)

//ES6  ARROW Function
// const power = (x)=> {
//     console.log(x*x)
// }
// power(3)

// const power = (x)=> {
//   return (x*x)
// }
// power(3)
// console.log(power(3))


// const power = (x)=> x*x 
// console.log(power(3))

// Imedietly invoked function Expresion IIFE

// (function add(a,b){
//     console.log(a+b)
// })(1,5)


// Higher order Function
function first(a){
    return function second(b){
        return function third(c){
            console.log(a+b+c)
        }
    }
} 
first(2)(3)(5)

// CallBack Function 
// Closer Function


//Arrow


// String
 const Sentence = "  This is The eXample Of StrinG   "
 Sentence.toUpperCase().split(/\s+/).join(" ").trim()
 console.log(Sentence)

