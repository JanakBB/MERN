//type method write a code, every task is object
//every property and function inside the object (let, const, function) => OOP (Object Oriented Programming) => Angular.js , java, c++
//till now what? => procedure programming => line by line
//functional programming => every thing in function. => React.js => easy

// Four pillars of Object oriented programming (EAIP)
//  **Encapsulation
//  **Abstraction
//  **Inheritance
//  **Polimorphism

//let's Go
//Procedure or functional programming
const User = {
    fName: 'Janak',
    lName: 'Bohara',
    age: 32
}

let Timing = new Date()

//find out User born year

function getUserBornYear () {//(age)
    return new Date().getFullYear() - User.age 

// return new Date().getFullYear() - age   
}
console.log(getUserBornYear())
console.log(getUserBornYear(32))
//Abstruction => not showing the Complexity(जटिलता) // भित्र भित्रै के भइरहेको छ जान्नु पर्ने कारण नै छैन तर काम भइरहेको छ । use method or function on the global
//Examle of Mobile phone, work but not need the how to work?

let withOUtAbstruction = new Date().getFullYear() - 32
console.log(withOUtAbstruction)



//object oriented programming
let User2 = {
    Fname: 'Roshan',
    Lname: 'Thapa',
    Age: 30,
    getUser2BornYear: function () {
        return new Date().getFullYear() - User2.Age//User2.Age
    } 
}

console.log(User2.getUser2BornYear())

//data and logic collection into one store => Encapsulation =>pursose: hide from user;
//hide data from global scope => Encapsulation, not accessiable data from out side but till now , when we will inter the full Encapsulation than we will have priventaion to access to data

//#################
const Student1 = {
    fullName: 'Rakesh yadav',
    age: 23,
    getAgeYear: function () {
        return new Date().getFullYear() - Student1.age;
    }
}

console.log(Student1.getAgeYear())

const Student2 = {
    fullName: 'Sarala Paudel',
    age: 19,
    getAgeYear: function () {
        return new Date().getFullYear() - Student2.age
    }
}

console.log(Student2.getAgeYear())
console.log(Student1.getAgeYear())
//2 easy but 100 ? how


function creatUser(firstName, lastName, age) {
    const User = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getAgeYear2: function () {
            return new Date().getFullYear() - User.age;
        }
    }
    return User;
}

const User1 = creatUser('Laxmi', 'Dahal', 67)
console.log(User1)
console.log(User1.getAgeYear2())
console.log(User1.age)
const User3 = creatUser('Hari', 'Nepali', 55)
console.log(User3.getAgeYear2())
console.log(User3.age)

console.log(User1.getAgeYear2 === User3.getAgeYear2)//false

//55 used during check the memory location or value of age different
//is better creat function the outside
//that is solutation constructor
const array1 = [1, 2, 3, 4, 5];
const array2 = [11, 22, 33, 44, 55, 66]

console.log(array1.pop(1))
console.log(array1)
console.log(array2.pop(1))
console.log(array2)

console.log(array1.pop === array2.pop)//true //it located one or same memory address
//pop is method which created is already in method type. 
//Factory function

console.log('**********************')



//construction function
function getYearChromeUser() {
    console.log(this)                //not use UserDetails.age
    return new Date().getFullYear() - this.age; //^^^^^^^^^
}
//^^ we achived polymorphism => difference looks, poly=many, morph = rup, looks //cause of polymorphism is this keyword

function ChromeUser (firstName, lastName, age) {
    const UserDetailes = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getYearChromeUser,
    }
    return UserDetailes;
}

const ChromUser1 = ChromeUser('Ram', 'Adhikari', 45)
console.log(ChromUser1)
console.log(ChromUser1.getYearChromeUser())

const ChromeUser2 = ChromeUser('Sita', 'Chand', 40)
console.log(ChromeUser2);
console.log(ChromeUser2.getYearChromeUser())

console.log(ChromUser1.getYearChromeUser === ChromeUser2.getYearChromeUser) //because of getYearChromeUser locate same memory address.
console.log(getUserBornYear())//NaN Because this function is far from outter function 

// let function is like object
function MathSolution () {
    console.log(4 + 5)
}

MathSolution()
console.dir(MathSolution)
// MathSolution.number = 10
// MathSolution.number = {}
// console.log(MathSolution.number)
// console.dir(MathSolution)

function sayHi() {
    console.log('HHHHHHHHHHHHe')
    return 'Hellllo'
}
console.dir(sayHi)//prototype
console.log(sayHi.prototype)//constructor sayHi() //right click  show function definition => line number 162

// now not focus on construction
//now focus on use of prototype

console.log(sayHi())//Hellllo //nothing return => undefined;

// new
function sayHello() {
    return 'HI'
}
console.log(new sayHello())//new keyword return object, if you returned any value or not
//when we use new prefix of function than called construction function

// if you return 'Helllllo' than will be return object

// this and new connection
function ThisAndNew () {
    console.log(this)
}

ThisAndNew()//window {.., ..., ...}
new ThisAndNew()//ThisAndNew {}

//go to Chromeuser

function ChromeUser1 (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    ChromeUser1.prototype.getAgeYear1 = function () {
        return new Date().getFullYear() - this.age
    }

    ChromeUser1.prototype.getFullName1 = function () {
        return (this.firstName + " " + this.lastName)
    }
}

console.log(new ChromeUser1())//creat firstName: undefined
// console.log(ChromUser1('Janak', 'Bohara', 32))
console.log(new ChromeUser1('JanakBB', 'Bohara', 32))//
console.log(new ChromeUser1('Harish', 'Gupta', 23))

//store in variable
const user111 =  ChromeUser1('JanakBB', 'Bohara', 32)
console.log(user111)//in this movement 
console.log(window)//firstName, lastName, and age create in window.
const user222 = new ChromeUser1('Janak', 'Bohara', 32)
console.log(user222)

console.dir(ChromeUser1)
console.dir(ChromeUser1.prototype)
console.dir(user222.__proto__)//same to same

console.log(user222.getAgeYear1())
console.log(user222.getFullName1())






