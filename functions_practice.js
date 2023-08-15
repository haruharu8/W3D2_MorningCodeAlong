const answerOne = "lorem ipsum"
const answerTwo = "This is answer two"
const answerThree = "lorem ipsum three"

let count = 0;

// write a function that will count the length of 3 strings

const returnCount = (ans1, ans2, ans3) => {
    return ans1.length + ans2.length + ans3.length
}

let count1 = returnCount(answerOne, answerTwo, answerThree);

let count2 = returnCount("hello", "im", "Chase");

console.log(count1);
console.log(count2);


const isDivisible = (num) => {
    // check if divisible by 3 & 5

    if (num % 3 === 0 && num % 5 === 0) {
        return true
    } else {
        return false
    }
}

// let groupOneSize = 125;

let groupOneisGood = isDivisible(15);

console.log(groupOneisGood);

if (groupOneisGood) {

}

let myWords = "What is the longest word in this string?"

const findLongestWord = (sentence) => {
    // what if sentence is not a string or is an empty string
    if (sentence == '' || typeof sentence !== "string") {
        return
    }
    // return the longest word

    // 1. split string into individual words
    let arrayOfStrings = sentence.split(' ')
    // 2. loop through array and find the longest word
    let currentLongest = ''
    // i    0 1 2 3 4 X
    for (let i=0; i<arrayOfStrings.length; i++) {
        // is this word longer than the currentLongestWord
        if (arrayOfStrings[i].length > currentLongest.length) {
            currentLongest = arrayOfStrings[i]
        }
    }

    return currentLongest;
}

let longestWord = findLongestWord("what words are longest here")

console.log(longestWord);
