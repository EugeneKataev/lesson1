let num = parseInt(prompt("введите число"));
let result;
for (let a = 3; a <= num; a = 3*a) {
    result = `${a === num ? "можно получить" : "нельзя получить"}`
}
alert(result);