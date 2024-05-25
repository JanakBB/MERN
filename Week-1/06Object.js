//object decleration and expression function in object and thats effect(this.key and object.key)

let user = {
    fname: 'John',
    lname: 'Doe',
    age: 30,
    isAdmin: true,
    getFullName: function () {
        console.log(this.fname + this.lname);//find out this keyword in youtube ^^^^^^^^^^^
        return (this.fname + this.lname);

    },
    getName: () => {
        return (user.fname + user.lname);
    }
}

user.getFullName()
console.log(user.getFullName())
console.log(user.getName())

//find key in object
console.log(Object.keys(user))//['fname', 'lname', 'age', 'isAdmin', 'getFullName', 'getName']
//find values of object
console.log(Object.values(user))//['John', 'Doe', 30, true, ƒ, ƒ]
//find object empty or not
console.log(Object.keys(user).length)//if length is 0 than object is empty
//object concat : use assign()method
let user2 = {
    fname: 'Janak', //this fname has priority.
    userName2: 'Janak Bohara',
    ageOfUser2: 32,
    address: 'kathmandu'
};

console.log(Object.assign(user, user2))//assign method find two same key than last key has priority.



//Fizz Buzz FizzBuzz and number

for(i = 0; i <= 10; i++) {
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
