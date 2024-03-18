let result = 0;
let b = 500;
const max = 500;

for (let a = 1; a <= b; a++){
    result += a;
    if (a === b) {
        result = result / max;
        break;
    }
}
alert(result);