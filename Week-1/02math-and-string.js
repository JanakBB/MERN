let num1 = 10;
num1 = String(num1);//convert into string
console.log(typeof num1)

let num2 = 'ten';
console.log(typeof num2)
num2 = Number(num2);
console.log(num2);
console.log(typeof num2)

let num3 = 10;
// let num3 = -10;
num3 = Boolean(num3);//boolean convert into true or false
console.log(typeof num3)
console.log(num3)//so its outcome is true.

let num10 = 10
let num11 = '20'
//let num11 = 'twenty' NaN
let num13 = 30

console.log(num10 + num11)// 1020 why number conver into string?
console.log(typeof (num10 + num11))//string

console.log(num10 + num11 + num13)//102030

console.log(num10 + Number(num11))// 

console.log(num10 + +num11)//30 (num10 + +num11) + + one + is add and another + is Number Method
console.log(num10 + -num11)

// Binary, Octal, and Hexadecimal
//In modern computing and digital electronics, the most commonly used bases are decimal (base 10), binary (base 2), octal (base 8), and hexadecimal (base 16).

let bn = 0b10111 //0xff => hex(0-9, a-f) // 0o456 => octa (0-8) not a useable in project
let hex = 0xff
let octa = 0o677554
console.log(bn)
console.log(hex)
console.log(octa)



//**********string***************
let username14 = "janak"
console.log(username14.length)//find length
console.log(username14[0])//find charector start from 0
username14[2] = 's' //not work, no change into variable
console.log(username14.replace('a', 's')) //jsnak  give new value;
console.log(username14)//janak
console.log(username14.charAt(2)); // equal to username[2]
console.log(username14.includes('j')) // give true or false
console.log(username14.indexOf('j')) // 0 if true
console.log(username14.indexOf('z'))// -1 if false
console.log(username14.toUpperCase())// capital
console.log(username14.toLocaleLowerCase())// to lowercase
console.log(username14)

//*************split*********
let username15 = 'abc-123-456-789'
console.log(username15.split('-'))//based on - its divided into array, and remove - like ['abc', '123', '456', '789']
console.log(username15.split('123'))//remove 123 and give array like ['abc-', '-456-789']
console.log(username15.split(''))//['a', 'b', 'c', '-', '1', '2', '3', '-', '4', '5', '6', '-', '7', '8', '9']
let name44 = 'janak bohara'
console.log(name44.split(' '))

//*******slice */
let username16 = 'abc123456'
console.log(username16.slice(2, 7))//(0, 7-1)
console.log(username16)

//*************trim************
let name22 = '  janak   bohara           hello  ';
console.log(name22.length)
console.log(name22.trim());
console.log(name22.trim().length); //trim cut space of front of variable value but not between and back side
console.log(name22.trimEnd())
console.log(name22.trimStart())


//*****************Boolean************
let aabb = '10'
console.log(Boolean(aabb));//outcome true

let abb = '0'
console.log(Boolean(abb))//'0' is string so come true

let empty11 = ''//empty is false
console.log(Boolean(empty11));

let zeroVariable = 0
console.log(Boolean(zeroVariable))//0 is false

let emptySpace = '  '//more than 1 space is type of string value
console.log(Boolean(emptySpace))

//****concatination
let firstName = 'janak'
let lastName = 'bohara'
console.log(firstName + lastName)
console.log(firstName +''+ lastName)
console.log('My name is' + firstName +''+ lastName)
console.log(`My name is ${firstName} ${lastName}`)//string literals

let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);
console.log(result)//seafood

let text11 = "Hello";
let text12 = "world!";
let result11 = text11.concat(" ", text12);
console.log(result11)

//string.concat(string1, string2, ..., stringX)

let text111 = "Hello";
let text112 = "world!";
let text113 = "Have a nice day!";
let result111 = text111.concat(" ", text112, " ", text113);
console.log(result111)



