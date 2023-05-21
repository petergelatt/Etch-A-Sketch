//write a created grid function that add the amount of needed cells to the grid
// needs a parameter that will represent the amount of cells that need to be added
// needs a loop that will continue to add new cells to the grid container until argument number is satisfied
let isEraserSelected = false;

document.getElementById('sizeSlider').addEventListener('input', setGridSize);
document.getElementById('clearButton').addEventListener('click', clearGrid);
document.getElementById('eraserButton').addEventListener('click', toggleEraser);


function setGridSize(){
    let sizeSlider = document.getElementById('sizeSlider');
    let gridNumber = parseInt(sizeSlider.value);
    console.log(gridNumber)
    createGrid(gridNumber);
    }
function clearGrid() {

    let cells = document.querySelectorAll('.cell');
    
    cells.forEach(function(cell) {
        cell.style.backgroundColor = 'white';
        cell.style.color = 'white';
    });
}
function toggleEraser() {
    isEraserSelected = !isEraserSelected;
    if (isEraserSelected) {
      document.getElementById('eraserButton').classList.add('active');
    } else {
      document.getElementById('eraserButton').classList.remove('active');
    }
  }
  
  
function createGrid(gridNumber) {

    let grid = document.getElementById('grid');

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
    let cellSize = 500 / gridNumber -4; 
    for (i = 0; i < gridNumber * gridNumber; i++) { 
        let cell = document.createElement('div'); 
        cell.classList.add('cell'); 
        cell.id = 'cell' + i; 
        cell.style.width = cellSize + 'px'; 
        cell.style.height = cellSize + 'px'; 

        grid.appendChild(cell); 

        grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

        cell.addEventListener('mouseenter', function() {
            if (isEraserSelected) {
              this.style.backgroundColor = 'white';
              this.style.color = 'white';
            } else {
              this.style.backgroundColor = 'red';
              this.style.color = 'yellow';
            }
          });
      
          cell.addEventListener('mouseleave', function() {
            if (isEraserSelected) {
              this.style.backgroundColor = 'white';
              this.style.color = 'white';
            } else {
              this.style.backgroundColor = 'blue';
              this.style.color = 'blue';
            }
          });
    }
    cell.addEventListener('click', function() {
        if (isEraserSelected) {
          this.classList.toggle('erased');
        }
      });

    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    grid.style.gap = '0';
}



  


