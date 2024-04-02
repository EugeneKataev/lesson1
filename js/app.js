window.addEventListener('DOMContentLoaded', loadData());

document.querySelector(".head-nav").addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
        let id = e.target.id;
        loadData(id);
    }
})

document.getElementById("menu-subject").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        let url = e.target.getAttribute("data-url");
        let category = e.target.getAttribute("data-category");
        loadInfoTarget(url, category)

        const allLi = document.querySelectorAll('#menu-subject li');
        allLi.forEach(li => {
            li.classList.remove('active');
        });

        e.target.classList.add("active");
    }
    if (e.target.classList.contains("btn-page")) {
        let category = e.target.getAttribute("data-category");
        let page = e.target.getAttribute("data-page");
        loadData(category, page);
    }
})