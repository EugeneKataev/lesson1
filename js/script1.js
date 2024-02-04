let text = '';
let a = 20
let b =30
while (a <= b) {
        text += `${a % 1 === 0 ? `${a} `: `${a - 0.5},5 `}`
        a += 0.5
}
alert(text);
