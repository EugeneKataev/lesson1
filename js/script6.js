let result = 0;
let b = 500;

for (let a = 1; a <= b; a++){
    result += a;
    if (a === b) {
        result = result / 500;
        break;
    }
}
alert(result);