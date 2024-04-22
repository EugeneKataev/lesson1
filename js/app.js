document.getElementById("submit-info").addEventListener("click",(e)=>{
        const infoBlock = document.getElementById("info");

        const inputName = document.getElementById("people-name");
        const inputAge = document.getElementById("people-age");
        const inputCarModel = document.getElementById("car-model");
        const inputCarYear = document.getElementById("car-year");

        let arrInputs = [inputName, inputAge, inputCarModel, inputCarYear];

        let valid = validate(arrInputs);

        if (valid) {
                const personObj = new Person(inputName.value, inputAge.value);
                const carObj = new Car(inputCarModel.value, inputCarYear.value);
                carObj.setOwner(personObj);
                console.log(carObj);
                infoBlock.textContent = carObj.showInfo();
        }

})