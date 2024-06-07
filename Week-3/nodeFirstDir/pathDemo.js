import path from 'path';
import url from 'url';

// let homePath = '/Desktop/MERN/class/Week-3/nodeFirstDir/index.js'

// console.log(path.dirname(homePath))
// console.log(path.)

let filename = url.fileURLToPath(import.meta.url);
let dirname = path.dirname(filename);

console.log(filename);
console.log(dirname)