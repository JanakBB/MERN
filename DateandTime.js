//***********Date**************
let today1 = Date()
console.log(today1)

//console.log(today1.toLocaleDateString())//today1.toLocaleDateString is not a function   
// console.log(today1.toLocaleTimeString()) today1.toLocaleDateString is not a function.

console.log('###########')

// In JavaScript, the new keyword is used to create an instance of an object. When you use new with the Date constructor, it creates a new Date object. This is necessary because Date is a constructor function, and the new keyword initializes a new object created by this constructor.

function person11 (name, age) {
    
        this.name =  name,
        this.age =  age
    
    console.log(`My name is ${this.name}. I am ${this.age} years old.`)
}

console.log(person11('Janak', 32)) 
// console.log(person11('Janak', 32)) 


const person11A = person11('Janak', 32)
console.log(person11A)
//console.log(newList.nameList)





function Person(name, age) {
    this.name = name; // Setting a property 'name'
    this.age = age;   // Setting a property 'age'
}

// Creating a new Person object
let person1 = new Person("Alice", 30);

console.log(person1)
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 30

console.log('*******########')
console.log(this)


let today = new Date()
console.log(today) 
// whole time 2024-05-19T02:48:14.003Z
//2024-05-19: This part represents the date in the format YYYY-MM-DD, which is year-month-day. Here, it means May 19, 2024.
// T: The letter 'T' is a separator indicating the start of the time component.
// 02:48:14.003: This part represents the time in the format hh:mm:ss.sss, which is hours, minutes, seconds, and milliseconds. Here, it means 2 hours, 48 minutes, 14 seconds, and 3 milliseconds past midnight.
// Z: The letter 'Z' stands for "Zulu" time, which is another name for Coordinated Universal Time (UTC). It indicates that the time is in UTC rather than in any local time zone.
console.log(today.toDateString()) //Sun May 19 2024
console.log(today.toTimeString())//08:42:07 GMT+0545 (Nepal Time) ,

console.log(today.toLocaleDateString())//5/19/2024   => use in web page and provide order date
console.log(today.toLocaleTimeString()) // 8:44:52 AM

console.log(today.getDate())// only date 19
console.log(today.getFullYear())//2024
console.log(today.getMonth())//4, start from 0, 0 means jan, 11 means dec
console.log(today.getDay())// 0, start from 0, 0 means sunday, 6 means saturday

console.log('**************')

console.log(today.getHours()) // 8
console.log(today.getMinutes())//54
console.log(today.getSeconds())//50
console.log(today.getMilliseconds())//769 

console.log('**************')

console.log(today.getTimezoneOffset()) //-345
// Positive Offset: Indicates that the local time is ahead of UTC. For example, if the local time zone is UTC+2 hours, the timeTimezoneOffset would be -120 minutes (since the offset is often represented as the negative difference from UTC).
// Negative Offset: Indicates that the local time is behind UTC. For example, if the local time zone is UTC-5 hours, the timeTimezoneOffset would be +300 minutes.

// Breakdown of the Offset
// The offset is -345 minutes.
// Converting minutes to hours: 
// 345/60 = 5.75 hours.
// 0.75 hours is equivalent to 45 minutes.
// Interpreting the Time Zone
// A timeTimezoneOffset of -345 means the local time zone is UTC+5:45. This time zone is 5 hours and 45 minutes ahead of UTC.

console.log(today.getUTCDate())



//*******************Array***************
// let number = [1, 2, 3, 4, 5, 'six', true]

// number.push(7);
// console.log(number)
// number.pop()// remove last object
// console.log(number)

// let number1 = [1, 4, 6, 44, 'janak', 'gita'];
// console.log(number1.shift())//return 1 or first value
// // console.log(number1.unshift(8))

// console.log(number1)//after shift number1 lost index 0 //after unshift number1 add index 0 => 8


// let number11 =  [ 1, 2, 'a', 'b', 'i', 'ii'];
// console.log(number11.slice(2, 3))//slice give you new array ['a']
// console.log(number11)//no change on number11 array[ 1, 2, 'a', 'b', 'i', 'ii']

// let number111 = [11, 22, 33, 'aa', 'bb', 'iii', 'iv'];
// // console.log(number111.splice(2, 5))//give you [2 is index and 5 length]
// // console.log(number111)// ramaining value give you [11, 22]
// // console.log(number111.split(','))// not work try again

// //array conver into string use join(), join(' '), join('-'), etc.
// console.log(number111.join('-'))//give you string 11-22-33-aa-bb-iii-iv this type

// let username = 'janak.com@example.com';
// console.log(username.split('@')[0])//this is string. [0] give us first value.


// //*************Operator and operation***********
// //+, -, *, /
// console.log(1 + 2)
// console.log(33 - 11)
// console.log(2 * 1)
// console.log(5 / 2)
// console.log(5 % 2)//remainder give us 1

// console.log(2 > 1)//boolean value true and false
// console.log(2 < 1)
// console.log(2 <= 1)

// console.log(1 == 1)
// console.log( 1 === 1)
// console.log(1 == '1')//loose comparasion
// console.log(1 === '1')//strict comparasion

// console.log(true && false)// chiya r biscute liyar aaunu vaneko jasto ho .both liyar aaunu parx ho = false
// console.log(false && true)// chiya liyan biscute matra liyar aayo => false
// console.log(true && true)// chiya r biscute liyar aayako => true

// console.log( true || false)// chiya or coffee => chiya aaya pani pugyo => true
// console.log(false || true) // chiya liyan coffee liyar aayo => true
// console.log(true || true)//chiya and coffee both come => true
// console.log(false || false)// kunai pani liyan => false

// console.log('*******')

// let a = true
// console.log(!a);