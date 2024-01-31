let num = parseInt(prompt("шестизначное число"));

let num_end = num % 1000; //last 3 digits of the number
let num_first = (num - num_end) / 1000; //first 3 digits of the number

let num_first_three = num_first % 10;
let num_first_two = ((num_first % 100) - num_first_three) / 10;
let num_first_one = (num_first - num_first_two * 10 - num_first_three) / 100

let num_firstMirror = String(num_first_three) + String(num_first_two) + String(num_first_one);

let result = (Number(num_firstMirror) === num_end) ? "число зеркальное" : "число не зеркальное";

alert(result);