//while loop
let num = 1;
while(num <= 100) {
    if (num % 2 == 0) console.log(num)
        num++
}

//Do while loop
let num1 = 1;
do {
    if (num % 2 == 0) console.log(num)
        num++
} while (num <= 100);

//2 - 8
// 2 * 1 = 2
//2 * 2 = 4

let num2 =  2

// while (num <= 8) {
//     if (num) {
//         for(let i = 1; i <= 10; i++)
//         console.log(`${num} * ${i} = ${num * i} `)
//         num++
//     }
    
// }

let num22 = 2
let num33 = 8
for(let i = num22; i <= num33; i++) {
    console.log(`Table of ${i}`)
    console.log('------------')
    for(let j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`)
    }
    console.log('---------')
}

// try above task into while loop


//function
function sum () {
    let num11 = 7
    let num111 = 8
    console.log(num11 + num111)
}
sum()
//parameter
function sum1 (num22, num222) {
   
    console.log(num22 + num222)
}
sum1(222, 333)

//store

function sum12 (num22, num222) {
   
    return num22 + num222
}
let result = sum12(222, 333)
console.log(result)

//
function logArray (arr) {
    console.log(arr)
}
logArray([1, 2, 3, 4, 5])

// 
let sum33 = function (num14, num24) {
    return num14 + num24
}
console.log(sum33(234, 4556))

// 
let add = (num34, num35) => {
    return num34 + num35//when we use {} than use return
}
console.log(add(3, 4))

//without {} arrow function
let add55 = (num55, num56) => num55 + num56 // not use return
console.log(add55(555, 556))


//
console.log(sum(78, 89))//hosting
// console.log(add88(789, 90))

function sum (num66, num67) {
    console.log(num66 + num67)
    return num66 + num67
}

let add88 = (num77, num78) => {
    return num77 + num78
}

// 
// var hosting => find garnu parne

// *********object***********
// where : use that is object
let user = {
    firstName: 'Janak',
    lastName: 'Bohara',
    age: 32,
    isAdmin: true,//JSON do not use last ,
    getFullName: function () {
        console.log(this.firstName + this.lastName)//use object own key propertie than use this
    },
    getName: () => {
        console.log(user.firstName + user.lastName)//here this is not useable bcoz of global scope
    }
};

console.log(user.firstName)
user.firstName = "Himal"
console.log(user.firstName)

console.log(user['firstName'])

let key1 = 'firstName'
user.firstName = 'joti'
user[key1]
console.log(user[key1])

user.getFullName()

user.getName()
