const container = document.querySelector('#container');
let createGrid = (size) => {
    let grid = [];

    for (i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add("row");
        container.appendChild(row);
        grid[i] = row;

        for (j = 0; j < size; j++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = "purple";
            });
            grid[i][j] = column;
        }
    }
    return grid;
};
console.log(createGrid(16))