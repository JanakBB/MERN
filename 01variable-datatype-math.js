// *****************PAID COURSE********************
//******************DAY 01*************************

console.log('Hellow world')

//*********TYPE OF VARIABLE****************

var username = 'Janak' //var is global scope.
let age = 31 //local scope
const  UserId = 1 //constance variable, not changable.
password = '123456' //global scope , if you cat not declear the type of variable than it comes into global scope.

//******************TYPE OF DATA TYPE*************

// * number => 1, 2, 3, 4.5
// * string => "javascript", 'python', '12345'
// * boolean => true, false
// * undefined => only declear name of variable but not contain the value
// * null => empty e.g: users = null;
// * BigInt =>

// * Array
// * object

//******logic of find of type of data********
let count = 10
console.log(typeof count) //outcome => Number.

let scount = count.toString()
console.log(typeof scount)

let temperature = 32.56754
console.log(temperature.toFixed(2)) //fixed after decimal
console.log(temperature.toPrecision(2)) //precision means to fixed total appear number

//****************Math******************
let price = 100000000
console.log(price.toLocaleString())//outcome => 1,000,000,000 like this
console.log(price.toLocaleString("en-In"))// outcome => 1,00,00,000 like this in nepal and India.

let num = 1.001
console.log(Math.floor(num))//floor downward to 1
console.log(Math.ceil(num))//ceil upward to 2

console.log(Math.random())//outcome => random number between 0 - 1
console.log(Math.random() * 10)// outcome => random number between 0 -10
console.log(Math.random() * 10 + 1)// outcome => random number between 1 -10

console.log(Math.floor(Math.random() * 10))

const Min = 10
const max = 20
let randomNum = Math.floor(Math.random() * (max - Min + 1) + Min)
console.log(randomNum)







