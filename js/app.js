let myForm = document.getElementsByName('form-data')[0];
let btn = document.getElementById('btnSubmit');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    getData();
});

function validation(obj) {
    let valid = true;
    let inputs = myForm.querySelectorAll("input");
    inputs.forEach((e)=>{
        if (e.value === "") {
            e.style.border = "1px solid red";
        } else {e.style.border = "1px solid black";}
    })
    let area = myForm.address;
    if (area.value === "") {
        area.style.border = "1px solid red";
    } else {area.style.border = "1px solid black";}
    console.log(obj.date);
    for (let key in obj) {
        if (obj[key] === undefined || obj[key] === "" || (key === "language" && obj[key].length === 0)) {
            myForm.querySelector(`.error-${key}`).style.display = 'block';
            valid = false
        } else {
            myForm.querySelector(`.error-${key}`).style.display = 'none';
        }
    }
    return valid;
}

function getData() {
    let name = myForm.name.value;
    let date = convertDate(myForm.date.value);
    let gender = myForm.gender.value;
    let city = myForm.city.value;
    let address = myForm.address.value;
    let checkbox = myForm.languages;
    let obj = {
        name,
        date,
        gender,
        address,
        city,
        language: [],
    }
    checkbox.forEach((e) => {
        e.checked && obj.language.push(e.value);
    })
    if (validation(obj)){ //validation
        showInfoForm(obj);
    }
}
function showInfoForm(obj) {
    myForm.innerHTML = "";
    console.log(obj);
    addElements("Имя Фамилия:", obj.name);
    addElements("Дата:", obj.date);
    addElements("Пол:", `${obj.gender === "M" ? "Мужчина" : "Женщина"}`);
    addElements("Город:", obj.city);
    addElements("Адресс:", obj.address);
    addElements("Языки:", obj.language);
}
function addElements(text, info) {
    let div = document.createElement("div");
    let formText = document.createElement("p");
    let formInfo = document.createElement("p");
    formText.textContent = text;
    formInfo.textContent = info;
    myForm.appendChild(div);
    div.appendChild(formText);
    div.appendChild(formInfo);
}
function convertDate(date) {
    if (date === "" || date === undefined) {
        return date
    }
    let nums = date.split("-");
    let day = nums[2];
    let month = nums[1];
    let year = nums[0];

    return `${day}.${month}.${year}`
}