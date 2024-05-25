// call back and call back hell => new soluatiion is promis
//promis is javascript built up function/method
//new Promise give new object

function calculateArea (l, b) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (l < 0 || b < 0) {
                let errMessage = new Error('lenth or b is not negative number')
                reject(errMessage)
            } else {
                let area = l * b;
                resolve(area);
            }
        }, 2000)
    })
}

function checkEvent(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(true)
        } else {
            resolve(false)
        }
    });
}

//
calculateArea(10, 5)
 .then((resolve) => {
    return checkEvent(resolve)
 }).then ((data) => {
    return console.log(data)
 })

 3

calculateArea(5, 6)
 .then((resolve) => {
    console.log(resolve)
 })

async function output () {
    const result = await calculateArea (5, 6);
   console.log(result)
}

output()