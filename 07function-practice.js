//merge and sort

function mergeandSort(array1, array2) {
    //ES6 ==> object spreading
    let newArray = [...array1, ...array2]
    // array1.concat(array2)
    newArray.sort((a, b) => a -b)//support to string not to number
    console.log(newArray)
}

mergeandSort([4, 1, 2, 5], [1,2,5,6]) 
//output
//[
//     1, 1, 2, 2,
//     4, 5, 5, 6
//   ]

//********************************************************************/

//check palindrome e.g.: palindrome is like eye, satas, abcdefedcba word

function checkPalindrome (string) {
    //racecar
    //let stringValue = String(string) this is for if you given Number argument.
    let revesered_string = '';
    for(i = string.length - 1; i >= 0; i--) {
        revesered_string = revesered_string + string[i];
    }
    console.log(revesered_string)
    if (string === revesered_string) {
        console.log('Palindrone');
    } else {
        console.log('Not Palidrome')
    }
}

checkPalindrome('racecar')
checkPalindrome(1234321)

// *********************************************************

// callback
function sum(a, b, callback) {
    sum = 0;
    setTimeout(() => {
        sum = a + b;
        callback(sum)
    }, 5000);
    return sum
}

let result = sum(2, 3, (sum) => {
    console.log(sum)
})
console.log(result)

