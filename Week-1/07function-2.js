//function declarations => function statement
function add(number) {
    return number * number;
}

//*************************/
function FunFunction (paraObject) {//mobileObject put if you are not convince
    paraObject.productName = 'Apple';
}

const mobileObject = {
    productName: 'Samsung',
    year: 2023,
    price: '$999'
};

console.log(mobileObject.productName)

FunFunction(mobileObject)
console.log(mobileObject.productName)


//function expressions
const addTwoNumber = function (num1, num2) {
    return num1 + num2;
}

addTwoNumber(4);
console.log(addTwoNumber(4, 5))

//calling function

addTwoNumber(56, 67)
addTwoNumber(100, 5)
addTwoNumber(34, 89)

//function hoisting => tne any functions being called before it's declared.
console.log(square(5));

function square(n) {
    return n * n;
}

//function scope
//A function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variabls to which the parent function has access.

//The followinng variables are defined in the global scope
const num1 = 20;
const num2 = 30;
const fullName = 'Janak Bahadur Bohara';

//The function is defined in the global scope
function Multiply () {
    return num1 * num2
}

console.log(Multiply());

//A nested function Example 
function getScore () {
    const num11 = 23;
    const num22 = 56;

    function addNum () {
        return `${fullName} scored ${num11 + num22}`
    }
    return addNum();
}

console.log((getScore()))


//Nested functions and closures => simillar to scope
//You may nest a function wihin another function. The nested (inner) function is private to its containng (outer) function.

// It also forms a closure. 
//Since a nested function is a closure, this means that a nested function can 'inherit' the arguments variables of its containing function. In other words, the inner funtion contains the scope of the outer function.

//To summarize:
//* The inner function can be accessed only from statements in the outer function.
//* The inner function forms a closure: the inner function can use the arguments and variable of the outer function, while the outer function cannot user the arguments and variables of the inner function.


function addTwoSqureNumber(number1, number2) {
    function Sqqquare (x) {
        return x * x;
    }
    return Sqqquare(number1) + Sqqquare(number2)
}

console.log(addTwoSqureNumber(2, 4));
console.log(addTwoSqureNumber(10, 5));
console.log(addTwoSqureNumber(25, 10));
console.log(addTwoSqureNumber(7, 3));


//Multiply-nested functions

function A(x) {
    function B (y) {
        function C (z) {
            console.log(x + y + z);
        }
        C()
    }
    B();
}

A(1); //undefined; becouse number + undefined = undefined.

//Using the arguments object wowowo
function MyConcat(separator) {
    let result = "";
    for (let i = 1; i < arguments.length; i++) {
        result += (arguments[i] + separator );
        console.log(arguments[i])
        // console.log(arguments.length)
        // console.log(arguments)
    }
    return result;
}

console.log(MyConcat(", ", 1, 2, 3, "red", "green", "black" ))//wowowowow


// function parameters
// default parameters

//rest parameters
//syntax 
function f(a, b, ...theArgs) {

}

//recall of console.log('heheheheh')
// const mango = 'red';
// console.log('hello world', 'hi', mango)

function MyFunction (a, b, ...arguments) {
    console.log(`A): ${a}`);
    console.log('A):', a);
    console.log(a)
    console.log(`B): ${b}`);
    console.log(`Arguments: ${arguments}`)
    console.log('Arguments:', arguments )
    console.log(arguments)
    console.log(`${arguments}`)
}

MyFunction('one', 'two', 'three', 'four', 'five', 'six')

//function wrong (...one, ...two) {
// 
// }

//function wrong2 (...wrong, argument1, argument2) {

// }

function MyfunGame (argu1, argu2, ...argu3) {
    console.log('A:', argu1)
    console.log('B:', argu2)
    console.log('Argu3:', argu3)
    // console.log(argu3.length) //second step 
}



MyfunGame('one', 'two', 'three')
MyfunGame('one', 'two')
MyfunGame('one')

//using rest parameters in combination with ordinary paraments

function multiply11 (argument11, ...argument22) {
 return argument22.map((element) => {
   return argument11 * element
   //return argument22.map((element) => argument11 * argument22)
 });
}

const array11 = multiply11(2, 15, 25, 42);
console.log(array11)







