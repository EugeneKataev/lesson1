let num = parseInt(prompt("введите число"));

let resultText = (num % 2 === 0) ? "четной" : "нечетной";

alert("Заканчивается " + resultText + " цифрой " + (num % 10));