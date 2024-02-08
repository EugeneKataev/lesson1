let quantity = parseInt(prompt("количество значений массива"));
let arr = [];
function compareNumbers(a, b) {
    return a - b;
}
for (let a = 0; a < quantity; a++) {
     let val = prompt(`значение ${a+1}-го эллемента массива`);
     arr.push(val);
}
arr.sort(compareNumbers);
console.log(arr); //after sort
if (arr.length > 2) {
    arr.splice(1,3);
}
console.log(arr); //after splice