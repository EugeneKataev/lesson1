let num = parseInt(prompt("трехзначное число"));

let num_three = num % 10;
let num_two = (num % 100 - num_three) / 10;
let num_one = (num - (num % 100)) / 100;

let resultNumFullSame = (num_one === num_two && num_one === num_three && num_two === num_three) ? "все цифры числа - одинаковые" : "все цифры числа - не одинаковые"
let resultNumSame = (num_one === num_two || num_one === num_three || num_two === num_three)  ? "в числе есть одинаковые цифры" : "в числе нет одинаковых цифр"


alert(resultNumFullSame + "\n" + resultNumSame);