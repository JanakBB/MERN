import fs from 'fs';

fs.writeFile('./02fileSystem.txt', 'First line o file', (err) => {
    if(err) {
        console.log(err.message)
    }
});

fs.readFile('./02fileSystem.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log(data);
    }
});

fs.appendFile('./02fileSystem.txt', '\nThis is second Line', (err) => {
    if(err) {
        console.log(err.message);
    }
});

// fs.writeFile('./02newFile.txt', 'Hello new file', (err) => {
//     if(err) {
//         console.log(err.message)
//     }
// })

// fs.unlink('./02newFile.txt', (err) => {
//     if(err) console.log(err.message)
// })

if(fs.existsSync('.02newFile.txt')) {
    fs.unlink('.02newFile.txt', (err) => {
        if(err) console.log(err.message)
    })
}

