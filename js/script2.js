let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let minElemArr = 0;

for (let a = 1; a < arr.length; a++) {
    let num = parseFloat(arr[a]);
    if (num < arr[minElemArr]){
        minElemArr = a;
    }
}
alert(`минимальный эллемент массива ${arr[minElemArr]}\nПорядковый номер ${minElemArr + 1}`)