// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//Jest Test Template
// describe("greeter", () => {
//     it("returns a generic greeting", () => {
//       expect(greeter()).toEqual("Hello, LEARN student!")
//     })
//   })

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codedMessage", () => {
    it("returns a string with a coded message", () => {
      expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

//Test failed as expected: ReferenceError: codedMessage is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.

//Pseudo:
//Create a function called codedMessage.
//Input: A string that can have upper and lower case characters. 
//Use an object to store the characters to their corresponding coded numbers. a => 4, e => 3, i => 1, o => 0
  //To include for upper/lowercase letters in string inputs, include lowercase and uppercase letters in object key-value pairs.  
  //Setup a regular expression with upper and lowercase letters for a, e, i, o. Include flags g and i; g for global search and i for ignoring casing. Regex will be used as the pattern in .replace method.
  //Use .replace method on the input string to replace the characters that match the pattern in the regex and replace with the character that is matched inside the object. 
    //The character represented inside the object will be passed in the .replace method as a function, that searches the object for the character that is matched in the string in iteration. Once a character is matched, it will be replaced with the value that is matched to the key inside the object. 
//Output: A string with a coded message. The characters a, e, i, and o will be converted to numbers. 
    //a will convert to 4
    //e will convert to 3
    //i will convert to 1
    //o will convert to 0  

//** To refactor function to allow for more characters:
//Would have to include more key-value pairs of different letters and corresponding numbers inside the object. 


const codedMessage = (string) => {
    //Object with key-pair values of code letters to number values
    const replaceObject = {
        a: '4',
        e: '3',
        i: '1',
        o: '0',
        A: '4',
        E: '3',
        I: '1',
        O: '0'
    }
    //Setup regex for lower/upper case letter with global search flag and i flag to ignore casing upon search
    let regex = /[aeioAEIO]/gi
    //.replace method to execute on the input string, comparing the regex pattern to the key-value pairs in the object
    return string.replace(regex, character => replaceObject[character])
}

console.log(codedMessage(secretCodeWord1)) 
//Output:  L4ck4d41s1c4l
console.log(codedMessage(secretCodeWord2))
//Output:  G0bbl3dyg00k
console.log(codedMessage(secretCodeWord3))
//Output:  3cc3ntr1c

//Test passed as expected: 
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("oneLetterFinder", () => {
    it("returns an aray of all the words containing that partcular letter", () => {
      expect(oneLetterFinder(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(oneLetterFinder(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

//Test failed as expected:  ReferenceError: oneLetterFinder is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total

// b) Create the function that makes the test pass.

//Pseudo:
//Create a function called oneLetterFinder.
//Input: An array and a single letter. 
//Use .filter to iterate over the input array(because we want a subset of the original array)
  //Check each element if it has a character that matches the input letter. Use .toLowerCase method to include for casing. 
  //.filter will return each element word that matches the input letter 
//Output: An array of words containing that particular single letter. 

const oneLetterFinder = (array, letter) => {
    //.filter to filter out the elements in the input array that includes the input letter
    return array.filter((value) => {
        //.toLowerCase used for casing inputs
        return value.toLowerCase().includes(letter)
    })
}
console.log(oneLetterFinder(fruitArray, letterA))
//Output:  [ 'Mango', 'Apricot', 'Peach' ]
console.log(oneLetterFinder(fruitArray, letterE))
//Output:  ['Cherry', 'Blueberry', 'Peach' ]

// Test passed as expected:
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
//Test example
const hand5 = [2, 2, 2, 7, 7.0]
// Expected output: false

describe("fullHouse", () => {
    it("returns a true or false value if the array is a 'full house'", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
        //Test example case
        expect(fullHouse(hand5)).toEqual(false)
    })
})

//Test failed as expected: ReferenceError: fullHouse is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

// b) Create the function that makes the test pass.

// Pseudo:
//Create a function called fullHouse.
//Input: An array of five numbers
//Figure out a way to count the occurences of each element in the array
//Based on those counts, determine if it matches a "full house"
//Use .reduce method to count the occurences of five and three in the array. 
    //Count will be incremented based on how many times five and three are in the array
    //Store those count values into variables
    //Use if/else conditional to verify if the count values strictly equal three or two(3 for three of a kind and 2 for one pair)
        //If true, return true. Else, return false
//Output: A true or false value if the array is a "full house"

// const fullHouse = (array) => {

//     let three = array.reduce((count, threeOfAKind) => threeOfAKind === 5 ? count + 1 : count, 0)
//     let two = array.reduce((count, twoPair) => twoPair === 3 ? count + 1 : count, 0)
//     // console.log(three)
//     // console.log(two)
//     if(three === 3 && two === 2){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(fullHouse(hand1))
//Output: true
// console.log(fullHouse(hand2))
//Output: false
// console.log(fullHouse(hand3))
//Output: false
// console.log(fullHouse(hand4)) //Function does not work for numbers outside the scope of the first three test examples because .reduce is comparing only to static 5 and 3. 
//Output: false 

//Refactored function
//Pseudo:
//Create a function called fullHouse.
//Input: An array of numbers
//Create an object to store the count of each element in the inout array
//Use a for of loop to count the number occurrences of each element in the array. Num is the actual value, array is the iterable object to execute the loop on and inside the loop contains a shorthand if statement adding one to each element count as the loop iterates. All the count values get put into the empty object created outside the loop. 
//Store the element occurrences count from the object to an array
//Use if/else statement to compare object count values insiee array to 2 and 3(full house)
//Output: A true or false value if the array is a "full house"

const fullHouse = (array) => {
    //Create empty object to hold element count occurences
    const handCount = {}
    //for of loop to count occurrences of each element in the array
    for(const num of array){
        handCount[num] = handCount[num] ? handCount[num] + 1 : 1
    }
    //Store count values from the object into an array
    const countArray = Object.values(handCount)
    //Compare the object values inside the array that are strictly equal to 2 and 3
    if(countArray[0] === 2 && countArray[1] === 3){
        return true
    }else{
        return false
    }
}
console.log(fullHouse(hand1))
//Output: true
console.log(fullHouse(hand2))
//Output: false
console.log(fullHouse(hand3))
//Output: false
console.log(fullHouse(hand4))
//Output: true
console.log(fullHouse(hand5))
//Output: false

//Test passed on refactored function:
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total