import fs from "fs/promises";

fs.writeFile('./02fsPromise.txt', 'new fsPromise file')
.then(() => console.log('file written'))
.catch((err) => console.log(err.message))