let action = prompt("Что вы хотите сделать? add, sub, mult, div");

let numOne = Number(prompt("первое число: "));
let numTwo = Number(prompt("второе число: "));

let result = (action === "add") && (`${numOne} + ${numTwo} = ${numOne + numTwo}`) || (action === "sub") && (`${numOne} - ${numTwo} = ${numOne - numTwo}`) ||
    (action === "mult") && (`${numOne} * ${numTwo} = ${numOne * numTwo}`) || (action === "div") && (`${numOne} / ${numTwo} = ${numOne / numTwo}`);

alert(result);