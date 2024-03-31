const modal = document.getElementById("myModal");
const btnModal = document.getElementById("openModal");
const btnAlert = document.getElementById("openAlert");
const span = document.getElementsByClassName("close")[0];
const tooltip = document.getElementById("info");
const alertBlock = document.getElementById("headAlert");
const inputDate = document.getElementById("form_date");
const formInfoDate = document.querySelector(".form-info-date");

btnModal.addEventListener("click", () => {
    modal.classList.add("active");
});

btnModal.addEventListener("mouseover", (e) => {
    tooltip.classList.add("active");
    let btnWidth = e.target.offsetWidth;
    tooltip.style.left = `${btnWidth + 4}px`
    tooltip.style.top = `-17px`
});

btnModal.addEventListener("mouseout", () => {
    tooltip.classList.remove("active");
});

btnAlert.addEventListener("click", () => {
    alertBlock.classList.toggle("active");
})

span.addEventListener("click", () => {
    modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.classList.remove("active");
    }
});

inputDate.addEventListener("blur", (e) => {
    let valInput = e.target.value;
    const reg = /^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/;

    if (!reg.test(valInput)) {
        e.target.classList.add("is-invalid");
        formInfoDate.innerHTML = "";
    } else {
        e.target.classList.remove("is-invalid");
        let infoElem = document.createElement("p");
        let convertDate = moment(valInput, "DD-MM-YYYY").locale("ru").format("DD MMMM YYYY г.");
        infoElem.textContent = `Ваша дата рождения: ${convertDate}`;
        formInfoDate.innerHTML = "";
        formInfoDate.appendChild(infoElem);
    }
})
