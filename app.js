// Global variables
let canvas = document.getElementById('pixelCanvas');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let sizePicker = document.getElementById('sizePicker');
let eraseButton = document.getElementById('eraseButton');
let color = document.getElementById('colorPicker');

// Array to store most popular colors
let popularColors = [];

// Select color input
// Adds event listener when color is clicked on
color.addEventListener('click', function() {});

sizePicker.onsubmit = (event) => {
  event.preventDefault();
  clearGrid();
  createGrid();
};

let name = 'Sarah';
console.log(name);

const createGrid = () => {
  for (let i = 0; i < height.value; i++) {
    const row = canvas.insertRow(i);
    for (let j = 0; j < width.value; j++) {
      const cell = row.insertCell(j);
      cell.addEventListener('click', fillSquare);
    }
  }
};

const clearGrid = () => {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
};

// Function to set background to selected color on canvas
function fillSquare() {
  this.setAttribute('style', `background-color: ${color.value}`);
  popularColors.push(`${color.value}`);
  console.log(popularColors);
}

// Function to convert canvas to an image
const convertCanvasToImage = (canvas) => {
  let image = new Image();
  image.src = canvas.toDataURL('image/png');
  return image;
};
