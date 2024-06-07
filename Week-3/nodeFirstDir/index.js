// const sum = require('./calculator');//const variable is different doesn't matter
//const {add, sum} = require('./calculator');
//const calcu = require('./calculator');
import {add, sub, obje1, arr1} from './calculator.js';
import os from 'os';

// console.log(os.userInfo())
// console.log(os.totalmem())
// console.log(os.freemem())
// // console.log(os)
// console.log(os.arch())
// console.log(os.platform())
console.log(os.cpus())



console.log(add(45, 5))
console.log(sub(45,5))
// console.log(calcu.add(4, 5));
//console.log(calcu.sub(56, 8))

console.log(obje1.firstName)

 let result = arr1.filter((num) => {
    return num > 2;
 });

 console.log(result)