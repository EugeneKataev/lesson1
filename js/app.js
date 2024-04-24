let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamburger.getToppings());
hamburger.addTopping(Hamburger.TOPPING_MAYO);


console.log("Calories: " + hamburger.calculateCal());

console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Price with sauce: " + hamburger.calculatePrice());