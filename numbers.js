//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;


var total = num10 + parseInt(string8) + one
console.log(total)
console.clear()

//2. write a loop that will log only numbers divisible by 3 between 20 - 100

function divisibleByThree() {
    for (let i = 20; i < 100; i++) {
        if (i % 3 == 0) {
            console.log(i)
        }
    }
}
divisibleByThree()
console.clear()

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];
//add total, divide by number of indexes

function averageScore(arr) {
    let total = 0;    
    for (let i = 0; i < arr.length; i++) {
        const score = arr[i];
        total += score;
    }
    return (total / arr.length)
}
console.log(averageScore(scores))
console.clear()