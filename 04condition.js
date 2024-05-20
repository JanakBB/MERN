let username = 'Janak'
let age = 32
let isLoggedIn = true;

//normal conditon
//if conditon
//when out the result => when condition true. imp
if (isLoggedIn) {
    console.log(`username: ${username} and age = ${age}`)
} else {
    console.log('please login')
}

//*******prirequests*****
// let isPrime = true;
//     isPrime = false;
// Math.sqrt(num)
// `${}`
// break
// (num % i === 0)
//  what is expression
//&& => condition1 && condition2 => both true
// || => condition1 || condition2 => The result is true if either condition1 or condition2 (or both) are true.




let a = 10
let b = 20
let c = 15

if (a > b && a > c) (console.log(`${a} is greater than ${b} and ${c}`));
else if (b > a && b > c) console.log(`${b} is greater than ${a} and ${c}`)
else console.log(`${c} is greater than ${a} and ${b}`)

// *************switch***************

// switch(expression) {
//     case value1:
//         // Code to execute if expression === value1
//         break;
//     case value2:
//         // Code to execute if expression === value2
//         break;
//     // Add more cases as needed
//     default:
//         // Code to execute if none of the above cases match
// }

let today = new Date()
let day = today.getDay()
console.log(day)

switch (day) {
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    default:
        console.log('Invalid Day Num')

}

// Multiple Cases with the Same Code
let day12 = 2;
let dayName;

switch(day12) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        dayName = "Weekday";
        break;
    case 6:
    case 7:
        dayName = "Weekend";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Outputs: Weekday

// Handling Ranges
let score = 85;
let grade;

switch (true) {
    case (score >= 90):
        grade = "A";
        break;
    case (score >= 80):
        grade = "B";
        break;
    case (score >= 70):
        grade = "C";
        break;
    case (score >= 60):
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(`Your grade is ${grade}`); // Outputs: Your grade is B

//with array index
let num1 = 10
let num2 = 20
let op = ['*', '+', '-', '/']
let opp = '*'

switch (opp) {
    case op[0]:
        console.log(num1 * num2)
        break;
    case op[1]:
        console.log(num1 + num2)
        break
    case op[2]:
        console.log(num1 - num2)
        break
    case op[3]:
        console.log(num1 / num2)
        break
    default:
        console.log('invalid Operation')
}


// ********Ternary Operator:*********
// condition ? expression_if_true : expression_if_false


let age22 = 18
age22 >= 18 ? console.log("Eligible") : console.log("Not Eligible")

// *********loop***********
// *****for**********
for(let i = 0; i < 10; i++) {
    // console.log(i);
    console.log('--')
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

let num21 = 21

if (num21 %2 === 0) {
    console.log(`${num21} is even number`)
} else {
    console.log(`${num21} is odd number`)
}




// *******prime Number*********
//if condition find out prime number


let primeNum123 = 67
if (primeNum123 % 2 === 0) {
    console.log(`${primeNum123} is not prime Number`);
} else if (primeNum123 % 3 === 0) {
    console.log(`${primeNum123} is not prime number`)
} else if (primeNum123 % 5 === 0) {
    console.log(`${primeNum123} is not prime number`)
} else if (primeNum123 % 7 === 0) {
    console.log(`${primeNum123} is not prime number`)
} else if (primeNum123 % 9 === 0) {
    console.log(`${primeNum123} is not prime number`)
}
else if (primeNum123 % 11 === 0) {
    console.log(`${primeNum123} is not prime number`)
}
else if (primeNum123 % 13 === 0) {
    console.log(`${primeNum123} is not prime number`)
} else  {
    console.log(`${primeNum123} is  prime number`)
}

//for loop find out prime number
//again for loop describe
let primeNum44 = 27;
let isPrime = true;

if (primeNum44 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(primeNum44); i++) {
        if (primeNum44 % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${primeNum44} is a prime number`);
} else {
    console.log(`${primeNum44} is not a prime number`);
}


//prime number array store
//push
//*******prirequests*****
// let isPrime = true;
//     isPrime = false;
// Math.sqrt(num)
// `${}`
// break
// (num % i === 0)
let primes = [];

for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    
    if (num > 2 && num % 2 === 0) {
        isPrime = false;
    } else {
        for (let i = 3; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        primes.push(num);
    }
}

console.log(primes);

//****class wrong solution*********
// let num = 27
// let isPrime = true
// for (let i = 2; i < num; i++) {
//     if(num % i == 0) {
//         console.log('number is not prime')
//         isPrime = false;
//         break;
//     } 
//     if(isPrime) {
//         console.log("Number is Prime")
//         break
//     }
// }

