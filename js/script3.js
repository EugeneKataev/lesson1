let num = parseInt(prompt("введите число"));
let result = "";
for (let a = 1; a <= 100; a++) {
    result += `${a*a <= num ? `${a}<br>`: ``}`
}
document.write(result);