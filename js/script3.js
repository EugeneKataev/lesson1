let result = "";

for (let a = 1; a < 10; a++){
    result += `${a} * 7 = ${a*7}${a === 9 ? '' : '\n'}`;
}
alert(result);