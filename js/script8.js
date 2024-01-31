let num = parseInt(prompt("шестизначное число"));

let num_end = num % 1000;
let num_begin = (num - num_end) / 1000;

let num_begin_three = num_begin % 10;
let num_begin_two = ((num_begin % 100) - num_begin_three) / 10;
let num_begin_one = (num_begin - num_begin_two * 10 - num_begin_three) / 100

let num_beginMirror = String(num_begin_three) + String(num_begin_two) + String(num_begin_one);

let result = (Number(num_beginMirror) === num_end) ? "число зеркальное" : "число не зеркальное";

alert(result);