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
    for (let a = 0; a < arg.length; a++) {
        let i = textArr.indexOf(arg[a]);
            while (i > -1) {
                textArr.splice(i, 1);
                i = textArr.indexOf(arg[a]);
            }
    }
    return textArr.join('');
}
console.log(func(value, argument()));
