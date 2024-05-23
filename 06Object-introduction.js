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

//get value from object
//1. .notation
const MyName= "Janak";

let  country = {
    CountryName: 'Nepal',
    'Capital-state': 'Kathmandu',
    'Janak': 'CodeBook Pro'
}

console.log(country.CountryName)

//[] notation
console.log(country['Capital-state'])
// console.log(country.Capital-state)//error 
//[] notation is powerfull than . notation
console.log(country.MyName)
console.log(country[MyName])//CodeBook pro
//javascript expression
console.log(country['Capital' + '-' + 'state'])

//How to update the object
const subjects = {
    bookName: 'Maths',
    pageSize: 789,
}

console.log(subjects.units)

subjects.units = 23//update the units in subjects object

console.log(subjects)

// subjects.math-teacher = 'Hira lal gupta';//wrong way

subjects['math-teacher'] = 'Hira lal gupta'

console.log(subjects)

// console.log(subjects[math-teacher])// wrong way

console.log(subjects['math-teacher']) //right way


// one nested object and find address on memory
//show the link of memory
//update the inner object
//only campare the memory number not inside the value




