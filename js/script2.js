function entryNum(info) {
    let num
    do {
         num = parseFloat(prompt(info));
    } while (isNaN(num));
    return num
}

function doMathPlus(value1, value2) {
    return value1 + value2;
}
function doMathMinus(value1, value2) {
    return value1 - value2;
}
function doMathMulti(value1, value2) {
    return value1 * value2;
}
function doMathDivision(value1, value2) {
    return value1 / value2;
}
function doMathMod(value1, value2) {
    return value1 % value2;
}
function doMathExp(value1, value2) {
    let result = 1;
    for (let a = 0; a < value2; a++){
        result *= value1;
    }
    return result;
}

function doMath(x, sign, y) {
        switch (sign) {
            case "+" :
                return  doMathPlus(x, y);
            case "-":
                return  doMathMinus(x, y);
            case "*":
                return  doMathMulti(x, y);
            case "/":
                if (y === 0) {
                    return "делить на ноль нельзя";
                } else {
                    return  doMathDivision(x, y);
                }
            case "%":
                return  doMathMod(x, y);
            case "^":
                return  doMathExp(x, y);
            default:
                return  "вы ввели неправильно математическое действие";
        }
}

let numX = entryNum("введите число x");
let numY = entryNum("введите число y");
let sign = prompt("введите математическое действие");
console.log(doMath(numX, sign, numY));
