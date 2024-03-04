function generateKey(length, characters) {
    let resultArr = [];
    for (let i = 0; i < length; i++) {
            resultArr.push(characters[Math.floor(getRandomIntInclusive(characters.length))]);
        }
    resultArr = resultArr.join("");
    return resultArr;
}
function getRandomIntInclusive(max) {
    let min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const characters = 'gfjd2fh4';

const key = generateKey(10, characters);
console.log(key);