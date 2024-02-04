let result = '';
let a = 100;
let b = 200;

for (a; a <= b; a++){
    result += (a % 3 === 0) ? `${a + 3 >= b ? `${a}` : `${a}, `}`: ''; // a + 3 checking the last value to remove the comma at the end
}
alert(result);