const container = document.querySelector('#container');

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let size = prompt('What size grid?(0-100)');
    while (size < 0 || size > 100) {
        size = prompt('What size grid?(0-100)');
    }
    container.innerHTML = '';
    createGrid(size);
});

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

createGrid(16)