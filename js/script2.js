let numX;
let numY;
let sign;
do {
    numX = parseFloat(prompt("введите число x"));
} while (isNaN(numX));
do {
    numY = parseFloat(prompt("введите число y"));
} while (isNaN(numY));
sign = prompt("введите математическое действие");

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
        switch (true) {
            case sign === "+" :
                return  doMathPlus(x, y);
            case sign === "-":
                return  doMathMinus(x, y);
            case sign === "*":
                return  doMathMulti(x, y);
            case sign === "/":
                if (y === 0) {
                    return "делить на ноль нельзя";
                } else {
                    return  doMathDivision(x, y);
                }
            case sign === "%":
                return  doMathMod(x, y);
            case sign === "^":
                return  doMathExp(x, y);
            default:
                return  "вы ввели неправильно математическое действие";
        }
}
console.log(doMath(numX, sign, numY));
