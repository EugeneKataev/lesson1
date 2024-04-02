
function loadData(category = 'people', page = '1') {
        const baseUrl = `https://swapi.dev/api/`;
        const urlWithoutPage = `${baseUrl}${category}/?page=`
        const url = `${urlWithoutPage}${page}`;

    fetch(url)
        .then(result => result.json())
        .then(result => {
            const menu = document.getElementById("menu-subject");
            const infoBlock = document.getElementById("info");
            infoBlock.innerHTML = '';
            menu.innerHTML = '';

            result.results.forEach((elem) => {
                const li = document.createElement("li")
                li.textContent = `${elem.name}`;
                li.setAttribute("data-url", elem.url);
                li.setAttribute("data-category", category);
                menu.appendChild(li);
            })

            const paginationDiv = document.createElement("div");
            paginationDiv.classList.add("pagination-panel");

            const divLeft = document.createElement("div");
            divLeft.classList.add("pagination-block", "left");

            const divCenter = document.createElement("div");
            divCenter.classList.add("pagination-block", "center");
            divCenter.textContent = `${page} / ${Math.ceil(result.count / 10)}`;

            const divRight = document.createElement("div");
            divRight.classList.add("pagination-block", "right");

            const prevBtn = document.createElement("div");
            prevBtn.textContent = "Back";
            prevBtn.classList.add("btn-page");

            const nextBtn = document.createElement("div");
            nextBtn.textContent = "Next";
            nextBtn.classList.add("btn-page");

            const dataPrevious = result.previous;
            const dataNext = result.next;

            if (dataPrevious === null) {
                prevBtn.classList.add("disabled");
            } else {
                let prevPage = dataPrevious.replace(urlWithoutPage, "");
                prevBtn.setAttribute("data-page", prevPage);
                prevBtn.setAttribute("data-category", category);
            }

            if (dataNext === null) {
                nextBtn.classList.add("disabled");
            } else {
                let nextPage = dataNext.replace(urlWithoutPage, "");
                nextBtn.setAttribute("data-page", nextPage);
                nextBtn.setAttribute("data-category", category);
            }

            paginationDiv.appendChild(divLeft).appendChild(prevBtn);
            paginationDiv.appendChild(divCenter);
            paginationDiv.appendChild(divRight).appendChild(nextBtn);
            menu.appendChild(paginationDiv);

        })
}

function loadInfoTarget(url, category) {
    fetch(url)
        .then(result => result.json())
        .then(result => {
            showInfoTarget(result, category);
        })
}

function showInfoTarget(data, category) {
    let info = document.getElementById("info");
    let dataInfo;

    switch (category) {
        case "people":
            dataInfo =
                `<div><p>Name:</p><span>${data.name}</span></div>
                 <div><p>Mass:</p><span>${data.mass}</span></div>
                 <div><p>Height:</p><span>${data.height}</span></div>
                 <div><p>Hair Color:</p><span>${data.hair_color === "n/a" ? "no info" : data.hair_color}</span></div>
                 <div><p>Birth Year:</p><span>${data.birth_year === "n/a" ? "no info" : data.birth_year}</span></div>
                 <div><p>Gender:</p><span>${data.gender === "n/a" ? "no info" : data.gender}</span></div>
                 <div><p>Skin Color:</p><span>${data.skin_color}</span></div>
                `;
            break
        case "planets":
            dataInfo =
                `<div><p>Name:</p><span>${data.name}</span></div>
                 <div><p>Rotation Period:</p><span>${data.rotation_period}</span></div>
                 <div><p>Orbital Period:</p><span>${data.orbital_period}</span></div>
                 <div><p>Diameter:</p><span>${data.diameter}</span></div>
                 <div><p>Climate:</p><span>${data.climate}</span></div>
                 <div><p>Gravity:</p><span>${data.gravity === "N/A" ? "no info" : data.gravity}</span></div>
                 <div><p>Terrain:</p><span>${data.terrain}</span></div>
                 <div><p>Terrain:</p><span>${data.terrain}</span></div>
                 <div><p>Surface Water:</p><span>${data.surface_water}</span></div>
                 <div><p>Population:</p><span>${data.population}</span></div>
                `;
            break
        case "vehicles":
            dataInfo =
                `<div><p>Name:</p><span>${data.name}</span></div>
                 <div><p>Model:</p><span>${data.model}</span></div>
                 <div><p>Manufacturer:</p><span>${data.manufacturer}</span></div>
                 <div><p>Cost In Credits:</p><span>${data.cost_in_credits}</span></div>
                 <div><p>Length:</p><span>${data.length}</span></div>
                 <div><p>Max Atmosphering Speed:</p><span>${data.max_atmosphering_speed}</span></div>
                 <div><p>Crew:</p><span>${data.crew}</span></div>
                 <div><p>Passengers:</p><span>${data.passengers}</span></div>
                 <div><p>Cargo Capacity:</p><span>${data.cargo_capacity}</span></div>
                 <div><p>Consumables:</p><span>${data.consumables}</span></div>
                 <div><p>Vehicle Class:</p><span>${data.vehicle_class}</span></div>
                `;
            break

    }

    info.innerHTML = '';
    info.innerHTML = dataInfo;
}
