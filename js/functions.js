

class Hamburger {
    static SIZE_SMALL = { price: 50, cal: 20 };
    static SIZE_LARGE = { price: 100, cal: 40 };
    static STUFFING_CHEESE = { price: 10, ca: 20 };
    static STUFFING_SALAD = { price: 20, cal: 5 };
    static STUFFING_POTATO = { price: 15, cal: 10 };
    static TOPPING_CONDIMENT = { price: 15, cal: 0 };
    static TOPPING_MAYO = { price: 20, cal: 5 };
    static TOPPING_SAUCE = { price: 15, cal: 0 };

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let fullPrice = this.size.price + this.stuffing.price;
        this.toppings.forEach(topping => {
            fullPrice += topping.price;
        });
            return fullPrice;
    }

    calculateCal() {
        let fullCalories = this.size.cal + this.stuffing.cal;
        this.toppings.forEach(topping => {
            fullCalories += topping.cal;
        });
            return fullCalories;
    }

    getToppings() {
        return this.toppings;
    }
}