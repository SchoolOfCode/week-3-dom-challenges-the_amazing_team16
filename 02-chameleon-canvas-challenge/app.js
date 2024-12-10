/*
Learning Objectives:
  1. Understand and utilize DOM input events.
  2. Manipulate the style properties of DOM elements.
  3. React to changes in input fields dynamically.

Brief:
You're presented with a canvas and a color picker. Your task is to implement the functionality to change the background color of the canvas based on the color selected in the color picker.

Expected Outcomes:
  1. When a color is selected using the color picker, the canvas should instantly reflect that color.
  2. The canvas should always display the current color selected in the color picker.
*/

// Place your plan and solution below!
//Grab the id of the canvas
//Select colour picker using id value
//Find colour value
//Create a function to apply colour value to canvas
//Add event listener so that when colour picker is clicked, the canvas colour is changed.

const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("colorPicker");

function changeColor() {
  canvas.style.backgroundColor = colorPicker.value; // Applied the selected colour and select a value
}

colorPicker.addEventListener("input", changeColor);
