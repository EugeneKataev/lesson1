
function Person(name, year) {
    this.name = name;
    this.year = year;
    this.showInfo = function () {
       let info = `${this.name}, ${this.year} лет`;
        return info
    }
}

function Car(model, year) {
    this.model = model;
    this.year = year;
    this.owner = null;

    this.showInfo = function () {

        let info = `${this.model}, ${this.year}`
        if (this.owner !== null) {
            info += this.owner ? ` Владелец: ${this.owner.showInfo()}` : '';
        }

        return info;
    };

    this.setOwner = function(owner) {
        this.owner = owner;
    };
}

function validate(arrInputs) {
    let valid = true

    arrInputs.forEach((elem) => {
        if (elem.value === "" || (elem.id === "people-age" && elem.value < 18)) {
            elem.classList.add("error");
            valid = false;
        } else {
            elem.classList.remove("error");
        }
    });

    return valid;
}
