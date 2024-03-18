let result = "";

let num = 7;
let max = 9;

for (let a = 1; a <= max; a++){
    result += `${a} * ${num} = ${a*num}${a === max ? '' : '\n'}`;
}
alert(result);