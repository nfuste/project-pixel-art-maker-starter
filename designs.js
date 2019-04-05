// Select color input
let colorInput = document.querySelector("#colorPicker");

// Select size input
let sizeInput = document.querySelector("#sizePicker");
let inputHeight = document.querySelector("#inputHeight");
let inputWidth = document.querySelector("#inputWidth");

// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener("submit", makeGrid);

function makeGrid(event) {
    console.log("Work in progress");
    event.preventDefault();
    let table = document.querySelector("#pixelCanvas");
    let tableBody = document.createElement("tbody");
    let height = inputHeight.value;
    let width = inputWidth.value;

    // Create table rows
    for (let i = 0; i < height; i++) {
        // Create one row
        let row = document.createElement("tr");

        for (let j = 0; j < width; j++) {
            // Create one column
            let column = document.createElement("td");
            column.addEventListener("click", changeColor);
            row.appendChild(column);
        }
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);

    
}

function changeColor() {
    console.log("hola");
}
