let birth = prompt("Какой ваш год рождения?");
let city = birth && prompt("В каком городе вы проживаете?");
let favoriteSport = city && prompt("Какой ваш любимый вид спорта?");

let checkPrompt = false;

switch (null) {
    case birth:
        alert("Жаль что вы не захотели ввести свой год рождения")
        break
    case city:
        alert("Жаль что вы не захотели ввести свой город")
        break
    case favoriteSport:
        alert("Жаль что вы не захотели ввести свой любимый вид спорта")
        break
    default:
        checkPrompt = true;
}


if (checkPrompt) {
    let resultCityText;
    let resultSportText;

    switch (city) {
        case "Киев":
            resultCityText = "Ты живешь в столице Украины";
            break
        case "Вашингтон":
            resultCityText = "Ты живешь в столице США";
            break
        case "Лондон":
            resultCityText = "Ты живешь в столице Великобритании";
            break
        default:
            resultCityText = "Ты живешь в городе " + city
    }

    switch (favoriteSport) {
        case "теннис":
            resultSportText = "Круто! Хочешь стать как Новак Джокович?";
            break
        case "футбол":
            resultSportText = "Круто! Хочешь стать как Лионель Месси?";
            break
        case "шахматы":
            resultSportText = "Круто! Хочешь стать как Магнус Карлсен?";
            break
    }

    let resultMassage = `${birth}\n${resultCityText}`;
    resultSportText && (resultMassage += `\n` + resultSportText);
    alert(resultMassage);
}



