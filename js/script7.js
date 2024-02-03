let result = 0;

for (let a = 30; a <= 80; a++){
    result += (a % 2 === 0) ? a : null;
}
alert(result);