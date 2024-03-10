let table = document.createElement("table");

for (let r = 0; r < 10; r++) {
    let row = document.createElement("tr");
    for (let c = 0; c < 10; c++) {
        let column = document.createElement("td");
        column.textContent = `${r * 10 + c + 1}`;
        row.appendChild(column);
    }
    table.appendChild(row);
}
document.body.appendChild(table);