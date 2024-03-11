let randomNum = Math.floor(Math.random() * 9) + 1;

let img = document.createElement("img");
img.src = `images/${randomNum}.jpg`
document.body.appendChild(img);