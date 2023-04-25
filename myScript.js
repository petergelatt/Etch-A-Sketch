//write a created grid function that add the amount of needed cells to the grid
// needs a parameter that will represent the amount of cells that need to be added
// needs a loop that will continue to add new cells to the grid container until argument number is satisfied


 gridNumber = 16

function createGrid(gridNumber) {

    let grid = document.getElementById('grid');

    for (i = 0; i < gridNumber * gridNumber; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell'); // Add class 'cell' to each cell element
        cell.id = 'cell' + i;
        grid.appendChild(cell);

        cell.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'red';
            this.style.color = 'yellow';
        });

        cell.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'blue';
            this.style.color = 'white';
        });

    
    }
}

createGrid(16);

  


