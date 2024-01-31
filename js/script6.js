let num = parseInt(prompt("трехзначное число"));

let num_sum = num % 10 + ((num % 100 - num % 10) / 10) + (num - num % 100) / 100;
let num_multiply = (num % 10) * ((num % 100 - num % 10) / 10) * ((num - num % 100) / 100);

let resultDouble = (num_sum % 2 === 0) ? "сумма цифр четная" : "сумма цифр нечетная"
let resultFive = (num_sum % 5 === 0) ? "сумма цифр кратная пяти" : "сумма цифр некратная пяти"
let resultMoreLess = (num_multiply > 100) ? "произведение цифр больше 100" : "произведение цифр меньше 100"

alert(resultDouble + "\n" + resultFive + "\n" + resultMoreLess);

