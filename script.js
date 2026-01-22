const generateTable = () => {
    // const display = document.getElementById("display");
    display.innerHTML = ""

    let tableNumber = Number(row.value);
    let multiple = Number(column.value);

    if (
        row.value == "" ||
        column.value == "" ||
        tableNumber <= 0 ||
        multiple <= 0
    ) {
        display.innerHTML =
            '<p style="color: #e74c3c; text-align: center; margin-top: 20px;">Please enter valid numbers.</p>';
    } else {
        for (let i = tableNumber; i >= 1; i--) {
            let columnTable = `<div class="column"><div class="column-header">Table of ${i}</div>`;

            for (let j = 1; j <= multiple; j++) {
                columnTable += `<p>${i} X ${j} = ${i * j}</p>`;
            }
            columnTable += `</div>`;
            display.innerHTML += columnTable;
        }
    }
};
