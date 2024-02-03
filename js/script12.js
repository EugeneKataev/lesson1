let result = '';
for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++){
        result += `${a} * ${b} = ${a*b}<br>`
    }
}
document.write(result);