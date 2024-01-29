let text = prompt("первая строка");
text += prompt("вторая строка");
text += prompt("третья строка");
    alert(text);

let Number = prompt("5ти значное число");
let fiveNumber = Number % 10;
let fourNumber = (Number % 100 - fiveNumber) / 10;
let threeNumber = (Number % 1000 - Number % 100) / 100;
let twoNumber = (Number % 10000 - Number % 1000) / 1000;
let oneNumber = (Number - Number % 10000) / 10000;
    alert(`${oneNumber} ${twoNumber} ${threeNumber} ${fourNumber} ${fiveNumber}`); //from the example in the first lesson