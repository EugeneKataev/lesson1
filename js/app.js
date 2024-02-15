
function showProducts() {
    for (let i = 0; i < products.length; i++) {
        console.log(`#${i + 1} ${products[i].name} - $${products[i].price}`);
    }
}

function getProductInfo(maxValue, promptText){
    let value;
    do {
        value = parseInt(prompt(`${promptText}`));
    } while(value < 1 || value > maxValue || isNaN(value));
    return value;
}

function calculatePrice(valueBuy, valueAmount) {
    return valueBuy.price * valueAmount;
}

function availabilityDiscounts(price) {
    return price >= discountStartsFrom ? calculateDiscountPrice(price) : price;
}

function calculateDiscountPrice(price) {
        return price - price * discount;
}

function showFullPrice(price) {
    return console.log(`${price >= discountStartsFrom ? `Congrats! You get discount. Your final price is ${price}` : `The final price is ${price}`}`);
}


const discount = 0.2;
const discountStartsFrom = 10000;

showProducts();
const productNumber = getProductInfo(products.length, "Enter product number");
const productBuy = products[productNumber - 1];
const productAmount = getProductInfo(productBuy.availability, "Enter amount of products you wanna buy");
const price = calculatePrice(productBuy, productAmount);
const fullPrice = availabilityDiscounts(price);
showFullPrice(fullPrice);
