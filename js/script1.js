const fullArr = [1, "as23", 9, false, [], {index: 1}, 24]

function calc(arr) {
    let numArr = [];
    let sum = 0;
    for (let a = 0; a < arr.length; a++){
        if (typeof arr[a] === "number") {
            numArr.push(arr[a]);
        }
    }
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
    return (sum / numArr.length);
}
console.log(calc(fullArr));