//basic of object
//primitive data type 7 categories => number, string, boolean, undefined, null, bigint, symbol

//non primitive data type => object

//objects are further dividec into three categories:
//Object Literals
//Arrays
//Functions

const userName = {} //block type treat // that is first object //empty object
//key: value pair
console.log(userName)

const userNameA = {firstName: 'Aakash', lastName: 'Bohara', age: 26};

// new line 
//non primitive data have not same memory location
const user = {
    userfirstName: 'janak', 
    userlastName: 'bohara', 
    age: 32,
    address: 'Kathmandu',
    city: 'Mahendrangar',
};

const user1 = {
    userfirstName: 'janak', 
    userlastName: 'bohara', 
    age: 32,
    address: 'Kathmandu',
    city: 'Mahendrangar',
};

//primitive same memory location
const userNumber = 'hello-janak'
const userNumber1 = 'hello-janak'

//chart in ms-word of
//const userId1 = ''
//const userId2 = ''

//const objectId1 = {}
//const objectId2 = {}

//we campaire only memory address or references



//##############****************
//Fizz Buzz FizzBuzz and number

for(i = 0; i <= 100; i++) {
    i % 3 === 0 && i % 5 === 0
    ?
    console.log('Fizz Buzz') : i % 3 === 0
    ?
     console.log('Fizz') : i % 5 === 0
     ? 
     console.log('Buzz') : console.log(i)
        
    }

//write function and sum given arry value
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum)
}

let arr = [1, 2, 3, 4, 5]
sumArray(arr)

//remove duplicate
//chat gpt
const array55 = [1,1,1,2,2,3,4,5,6,6]
const newArray = [...new Set(array55)]
console.log(newArray)

// class sir version
const removeDuplicates = (arr) => {
    let newarr = []
    for(let num of arr) {
        if (!newarr.includes(num)) {
            newarr.push(num)
        }
        console.log(newarr)
    }
}
