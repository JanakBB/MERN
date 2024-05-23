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

