let num = parseInt(prompt("трехзначное число"));

let firstDigit = parseInt(num / 100);
let secondDigit = parseInt((num / 10) % 10);
let thirdDigit = parseInt(num % 10);

let num_sum = firstDigit + secondDigit + thirdDigit;
let num_multiply = firstDigit * secondDigit * thirdDigit;

let resultDouble = (num_sum % 2 === 0) ? "сумма цифр четная" : "сумма цифр нечетная"
let resultFive = (num_sum % 5 === 0) ? "сумма цифр кратная пяти" : "сумма цифр некратная пяти"
let resultMoreLess = (num_multiply > 100) ? "произведение цифр больше 100" : "произведение цифр меньше 100"

alert(resultDouble + "\n" + resultFive + "\n" + resultMoreLess);

