//what is this? Question Asked the person.
//Question is same but answer is different evey this question.

//In JavaScript, the this keyword always refers to an object.

//this is keyword, not a variable, we can not update the this keyword.

//this is always change based on sinario.

//this keyword represent the object.

//in global
// console.log(this) //window{} //in node this is {} empty why?
// function window1 () {//global and function is same..//in node global
//     console.log(this)
// }

// window1()

// in object
let Bom = {
    userName: 'Janak',
    userLastName: 'Bohara',
    age: 32,
    address: 'Kathmandu',
    getNameAddress: function (Name, Surname) {
        // console.log(this)//object
        console.log(`My Name is ${Name} and I live in ${this.address}`);
    },
    getFullName: () => {
        // console.log(this)//global
        // console.log(`My Name is ${Bom.userName} and I live in ${Bom.address}`)
    }
}

Bom.getNameAddress()
//array not work
// let array = [11, 22, 33, 44, this[0]]
// console.log(array)

// call, apply and bind
//call => call() method allows an object to use the method(function) of another object

let Bom1 = {
    userName: 'janak',
    userLastName: 'Bohara',
    age: 32,
    address: 'Kathmandu',
    
}
Bom.getNameAddress('Janak', 'Bohara')

Bom.getNameAddress.call(Bom1, 'Sita')

//
let user = {
    fname: 'Janak',
    lname: 'Bohara',
    age: 30,
    isAdmin: true,
    phone: [9868747299, 9876542345, {
        ncell: 9809428603,
        ntc: 9868990011,
        hicell: [8978]
    }],
    fullName: function () {
        console.log(this.fname + this.lname);
    },
    GetName: () => {
        console.log(user.fname + user.lname)
    }
}
console.log(user.phone[2].hicell[0])//new idea

user.fullName()
user.GetName()
console.log(Object.keys(user))
console.log(Object.values(user))

//How to find out Object is empty or not?
console.log(Object.keys(user).length)

//How to concat to object to object
let user2 = {
    job: true
}

console.log(Object.assign(user, user2))
console.log(Object.assign(user2, user))//user2 object key and value comes first of concat(assign) method object
console.log(Object.assign(user, {a:1, b:2, c:3})) //assign simply object



// console.log(this)

// function hello () {
//     console.log(this)
// }
// hello()

// const arrow =  () => {
//     console.log(this)
// }
// arrow()



