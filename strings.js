//1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
// careful not to uppercase the i in the word pair

var sentence = 'When i went to the mall i bought a pair of shoes.';
function capitialize(str) {
    let out = str.split(' ')                 //the out variable now equals an array of ['strings'] from the inputed 'string'
    for (let i = 0; i < out.length; i++) {  //this for loop looks through the array out at each index i
        const letter = out[i];              //the const letter is whatever the position of the array the loop is in.
        if (letter === "i") {               //here I created an if statement to look at letter and check if it is equal to 'i'
            out[i] = letter.toUpperCase()   //this is the the logic to be executed at index i of out changing the str to uppercase if the if statement is true.
        }
    }
    return out.join(' ');                   //the return statement here stops the execution of code and turns out back into a string.
}
console.log(capitialize(sentence))

//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';
function countA(str) {
    let out = str.split('')
    let counter = 0
    for (let i = 0; i < out.length; i++) {
        const letter = out[i];
        if (letter == "a" || letter == "A") {
            counter++
        }
    }
    return counter
}
console.log(countA(jsHistory))

//3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
//I SCREAM, you SCREAM, we all SCREAM for icecream

var text = 'I scream, you scream, we all scream for icecream';
function capScream(str) {
    let out = str.split(' ')
    for (let i = 0; i < out.length; i++) {
        const scream = out[i];
        if (scream.includes('scream')) {
            out[i] = scream.toUpperCase()
        }
    }
    return out.join(' ')
}
console.log(capScream(text))