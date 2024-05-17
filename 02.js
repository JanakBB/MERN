let num1 = 10;
num = String(num1);
console.log(typeof num1)

let num2 = 'ten';
num2 = String(num2);
console.log(typeof num2)

let num3 = 10;
// let num3 = -10;
num3 = Boolean(num3);
console.log(typeof num3)
console.log(num3)

let num10 = 10
let num11 = '20'
//let num11 = 'twenty' NaN
let num13 = 30

console.log(num10 + num11)//why number conver into string?
console.log(num10 + num11 + num13)//why number conver into string? 4020

console.log(num10 + Number(num11))// 30 (num10 + +num11) + + one + is add and another + is Number Method

console.log(num10 + +num11)
console.log(num10 + -num11)

let bn = 0b10111 //0xff => hex(0-9, a-f) // 0off => octa (0-8) not a useable in project
let hex = 0xff
let octa = 0o677554
console.log(bn)
console.log(hex)
console.log(octa)



//**********string***************
let username14 = "janak"
console.log(username14.length)
console.log(username14[0])
username14[2] = 's' //not work
console.log(username14.replace('a', 's')) //jsnak  give new value;
console.log(username14)//janak
console.log(username14.charAt(2)); // equal to username[2]
console.log(username14.includes('j')) // give true or false
console.log(username14.indexOf('j')) // 0 if true
console.log(username14.indexOf('z'))// -1 if false
console.log(username14.toUpperCase())// capital
console.log(username14.toLocaleLowerCase())// to lowercase
console.log(username14)

let username15 = 'abc-123-456'
console.log(username15.split('-'))
console.log(username15.split('123'))
console.log(username15.split(''))

let username16 = 'abc123456'
console.log(username16.slice(1, 4))

let name22 = '        janak   bohara           hello'
console.log(name22.trim()); //trim cut space of front of variable value but not between and back side
console.log(name22.trimEnd())
console.log(name22.trimStart())

let aabb = '10'
console.log(Boolean(aabb));

let abb = '0'
console.log(Boolean(abb))

let empty11 = ''//empty is false
console.log(Boolean(empty11));

let emptySpace = '  '//more than 1 space is type of string value
console.log(Boolean(emptySpace))


let firstName = 'janak'
let lastName = 'bohara'
console.log(firstName + lastName)
console.log(firstName +''+ lastName)
console.log('My name is' + firstName +''+ lastName)
console.log(`My name is ${firstName} ${lastName}`)//string literals


let name44 = 'janak bohara'
console.log(name44.split(' '))
