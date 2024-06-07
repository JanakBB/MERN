function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

const obje1 = {
    firstName: 'Janak',
    lastName: 'Bohara'
}

const arr1 = [1, 2, 3,4,5,6,7,8,9,10]


export {add, sub, obje1, arr1}

// module.exports = add;//default exports is only file exports in onece time

//exports.add = add;
//exports.sub = sub;
//module.exports = {add, sub}