let num = parseInt(prompt("введите натуральное число"));
let result = '';
for (let a = 1; a <= num; a++) {
     result += (num % a === 0) ? `${a === num ? `${a}`: `${a}, `}` : "";
}
alert(result);