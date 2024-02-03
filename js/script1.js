let text = '';
let b = 20
for (let a = 10 ; a <= b; a++){
        text += `${a}${a === b ? "" : ","}`
}
alert(text);
/*
let text = '';
let a = 10
while (true) {
    if (a === 20) {
        text += `${a}`;
        break;
    }
    text += `${a++},`;
}
alert(text);*/
