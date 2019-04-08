// Select size input
let sizeInput = document.querySelector("#sizePicker");

// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener("submit", makeGrid);

function makeGrid(event) {
    event.preventDefault();
    let table = document.querySelector("#pixelCanvas");

    // If there is already a table, delete table
    let children = table.childNodes;
    
    for (let i = 0; i < children.length; i++) {
        table.removeChild(children[i]);
      }

    let tableBody = document.createElement("tbody");
    let inputHeight = document.querySelector("#inputHeight");
    let inputWidth = document.querySelector("#inputWidth");
    let height = inputHeight.value;
    let width = inputWidth.value;

    // Otherwise, create table rows
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

function changeColor(event) {
    // Select color input
    let colorInput = document.querySelector("#colorPicker");
    
    // Set color
    let cell = event.target;
    cell.style.backgroundColor = colorInput.value;
}
