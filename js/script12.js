let result = '';
for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++){
        result += `${a} * ${b} = ${a*b}<br>`
    }
}
document.write(result);