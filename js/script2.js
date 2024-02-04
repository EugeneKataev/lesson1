let result = "";
for (let a = 10; a <= 100; a += 10) {
    result += `${a === 100 ? `${a * 27}`: `${a * 27}, `}`;
}
alert(result);