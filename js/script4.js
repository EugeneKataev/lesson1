let num = parseInt(prompt("введите число"));
let result;
for (let a = (num - 1); a > 1; a--) {
    result = "число является простым";
    if (num % a === 0) {
        result = "число не является простым";
        break;
    }
}
alert(result);