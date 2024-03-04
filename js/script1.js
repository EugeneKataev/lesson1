function generateKey(length, characters) {
    let resultArr = [];
    for (let i = 0; i < length; i++) {
            resultArr.push(characters[getRandomIntInclusive(characters.length)]);
        }
    resultArr = resultArr.join("");
    return resultArr;
}
function getRandomIntInclusive(max) {
    let min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const characters = 'gfjd2fh4qwert';

const key = generateKey(5, characters);
console.log(key);