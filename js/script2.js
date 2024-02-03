let result = '';
for (let a = 10; a < 21; a++){
    result += `${a*a}${a === 20 ? '' : '\n'}`;
}
alert(result);