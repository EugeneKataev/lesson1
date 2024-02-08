let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0;

for (let a = 0; a < arr.length; a++) {
    let num = parseFloat(arr[a]);
    sum += (num > 0) && (num % 2 === 0) ? num : null;
}
alert(`сумма парных положительных эллементов ${sum}`)