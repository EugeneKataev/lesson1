const createChildArr = (numArr) => {
    let childArr;
    do {
        childArr = parseInt(prompt(`укажите длину ${numArr + 1}-го дочернего массива:`));
    } while (isNaN(childArr));

    let child = [];
    for (let a = 0; a < childArr; a++){
        let value = prompt(`введите значение ${a + 1}-го эллемента ${numArr + 1}-го дочернего массива:`);
        child.push(value);
    }

    return child
}
let createArray = () => {
    let parentArr;
    do {
        parentArr = parseInt(prompt("длина родительского массива:"));
    } while (isNaN(parentArr));

    let resultArr = [];
    for (let a = 0; a < parentArr; a++ ){
        resultArr.push(createChildArr(a));
    }

    return resultArr;
}
console.log(createArray());
