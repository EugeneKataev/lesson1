let num = parseInt(prompt("введите двухзначное число"));

let secondNum = num % 10;
let firstNum = (num - secondNum) / 10;

switch (true) {
    case firstNum > secondNum:
        alert("первая цифра больше");
        break
    case secondNum > firstNum:
        alert("вторая цифра больше");
        break
    default:
        alert("цифры равны");
}