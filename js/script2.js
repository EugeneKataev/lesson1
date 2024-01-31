let disKm = parseInt(prompt("Расстояние в километрах"));
let disFut = parseInt(prompt("Расстояние в футах"));

let disM_fromKm = disKm * 1000;
let disM_fromFut = disFut * 0.305;

if (disM_fromKm < disM_fromFut) {
    alert(`${disKm} км меньше чем ${disFut} фут`);
} else if (disM_fromKm > disM_fromFut) {
    alert(`${disFut} фут меньше чем ${disKm} км`);
} else {
    alert(`равны`);
}