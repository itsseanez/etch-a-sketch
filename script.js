const container = document.querySelector('#container');

function randomRGB() {
    const r = Math.floor(Math.random() * 256);  
    const g = Math.floor(Math.random() * 256);  
    const b = Math.floor(Math.random() * 256);  
    return `rgb(${r}, ${g}, ${b})`;
}


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
                column.style.backgroundColor = randomRGB();
            });
            grid[i][j] = column;
        }
    }
    return grid;
};
console.log(createGrid(16))