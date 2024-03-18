let text = prompt("первая строка");
text += prompt("вторая строка");
text += prompt("третья строка");
    alert(text);

let num = prompt("5ти значное число");
let fiveNumber = num % 10;
let fourNumber = (num % 100 - fiveNumber) / 10;
let threeNumber = (num % 1000 - num % 100) / 100;
let twoNumber = (num % 10000 - num % 1000) / 1000;
let oneNumber = (num - num % 10000) / 10000;
    alert(`${oneNumber} ${twoNumber} ${threeNumber} ${fourNumber} ${fiveNumber}`); //from the example in the first lesson