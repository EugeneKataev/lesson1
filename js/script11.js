let num = parseInt(prompt("введите натуральное число"));
let result = 0;
let info_text = '';
for (let a = 1; a <= num; a++) {
    result += ((num % a === 0) && (a % 2 === 0)) ? a : null;
    info_text += ((num % a === 0) && (a % 2 === 0)) ? `${a === num ? `${a}`: `${a} + `}` : "";
}
info_text = (info_text === '') ? "нет парных делителей" : info_text;
alert(result + " (" + info_text + ")");