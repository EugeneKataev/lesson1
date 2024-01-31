let num1 = parseInt(prompt("первое число"));
let num2 = parseInt(prompt("второе число"));


if (num1 < num2) {
    alert(`${num2} больше числа ${num1}`);
} else if (num1 > num2) {
    alert(`${num2} меньше числа ${num2}`);
} else {
    alert("числа равны");
}