// Global variables
let canvas = document.getElementById('pixelCanvas');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let sizePicker = document.getElementById('sizePicker');
let color = document.getElementById('colorPicker');

// Select color input
// Adds event listener when color is clicked on
color.addEventListener('click', function() {});

sizePicker.onsubmit = (event) => {
  event.preventDefault();
  clearGrid();
  createGrid();
};

function createGrid() {
  for (let i = 0; i < height.value; i++) {
    const row = canvas.insertRow(i);
    for (let j = 0; j < width.value; j++) {
      const cell = row.insertCell(j);
      cell.addEventListener('click', fillSquare);
    }
  }
}

function clearGrid() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}

// Function to set background to selected color on canvas
function fillSquare() {
  this.setAttribute('style', `background-color: ${color.value}`);
}
