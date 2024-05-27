let users= [{
    id: 1, 
    username: 'Janak'
}, {
    id: 2,
    username: 'John'
}]

let posts = [{
    id: 1,
    title: 'Post 1',
    postedBy: 1
}, {
    id: 2,
    title: 'Post 1',
    postedBy: 2
}]

function getPosts (userId) {
    return new Promise((res, rej) => {
        let user = users.find((u) => {// comes true or false 
            return u.id === userId;
        })
        if(user) {
            let post = posts.filter((p) => {//comes p or null
                return p.postedBy === userId;
            })
            res(post);
        } else {
            let errmsg = new Error(`User with id ${userId} not found`)
            rej(errmsg)
        }
    })
}

getPosts(1)
 .then((post) => {
    console.log(post)
 }).catch((err) => {
    console.log(err.message)
 })

async  function fetchPost () {
    try {
        let post = await getPosts(1);
        console.log(post)
    } catch (err) {
        console.log(err.message)
    }
 }

 fetchPost()

//  ES6
//let, const
//arrow function
//forEach
//find
// map
//reduce
//Object Destructuring
//
let numbers = [1,2,3,4,5,6,7,8]
let num3 = numbers.forEach((fr) => {
    return console.log(fr);
})
console.log(num3)

let num = numbers.find((f) => {//find only outcome find first true value
    return f % 2 === 0
})
console.log(num);

let num1 = numbers.filter(fil => fil % 2 === 0)
console.log(num1)

let num4 = numbers.map((m) => {
    return m * m;
})
console.log(num4)

let num5 = numbers.reduce((acc, re) => acc + re, 5)
console.log(num5)

let user = {
    username: 'Janak Bohara',
    password: 'Password123'
}

let {username, password} = user;
console.log(username)

//practice file
// print 1 to 100, if multipales of 3 print "Fizz", instead of the number and for he multiples of five, print "Buzz". For numbers which are multiples of three and five, print "FizzBuzz"

for(i = 1; i <= 100; i++) {
    i % 5 === 0 && i % 3 === 0 
    ? console.log('FizzBuzz') : i % 5 === 0 
    ? console.log('Buzz') : i % 3 === 0
    ? console.log('Fizz') : console.log(i)
}

//Write  a function SumArray(array) that takes an array of numbers and returns the sum of the elements. Use a loop to iterate through the array and the sum the numbers

function SumArray (array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum)
}

const list = [1,2,3,4,5,6,7,8,9]
SumArray(list)

// num of arr
// example1: in array
let num33 = [10, 20, 30, 40, 50];

for(let value of num33){
    console.log(value)
}

// example2 : string
const words = "Janak";

for (let word of words) {
    console.log(word)
}

let num66 = [1, 2,2, 3, 3, 4, 55, 6];
console.log(num66.includes(55));
console.log(!num66.includes(55));

function Duplicate(arry2) {
    let result = []
    for( i = 0; i < arry2.length; i++) {
        if(!result.includes(arry2[i])) {
            result.push(arry2[i])
        }
    }
    return result;
}

console.log(Duplicate(num66))




