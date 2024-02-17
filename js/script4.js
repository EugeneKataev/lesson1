const value = prompt("введите строку");

let argument = () => {
    let elem = parseInt(prompt("введите количество символов которые будем удалять"));
    let arrToDell = [];
    for (let a = 0; a < elem; a++) {
        let value;
        do {
            value = prompt(`введите ${a+1}-й символ`);
        } while (value.length > 1);
        arrToDell.push(value);
    }
    return arrToDell;
}

let textToArr = (text) => {
    let arr = [];
    for (let a = 0; a < text.length; a++) {
        arr.push(text[a]);
    }
    return arr
}
let func = (text, arg) => {
    let textArr = textToArr(text);
    for (let a = 0; a <= textArr.length; a++) {
            while (textArr.indexOf(arg[a]) > -1) {
                let i = textArr.indexOf(arg[a]);
                textArr.splice(i, 1);
            }
    }
    return textArr.join('');
}
console.log(func(value, argument()));
