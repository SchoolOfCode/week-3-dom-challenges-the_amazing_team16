/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on buttons.
  3. Manipulate image attributes dynamically based on user interactions.

Brief:
You're provided with two images of a lightbulb: one turned on and one turned off. Your task is to implement the functionality to control the bulb's illumination. Use the 'Turn On' and 'Turn Off' buttons to switch the src attribute of the image tag, effectively lighting up or dimming the bulb.

Expected Outcomes:
  1. When the "Turn On" button is clicked, the lightbulb image should change to its 'on' state.
  2. When the "Turn Off" button is clicked, the lightbulb image should change to its 'off' state.
  3. The bulb's state should only change when the respective button is clicked.
*/

// Place your plan and solution below!

//Turn button on

//Get the "turnBulbOn" id
const onButton = document.getElementById("turnBulbOn");
//Get the light-bulb-on.png
const img = document.getElementById("lightbulb")
//make function to change the image
function turnLightOn() {
  img.src = "light-bulb-on.png";
}
//use addEventListener for click
onButton.addEventListener("click", turnLightOn);


//Turn button off
//Get the "turnBulbOff" id
const offButton = document.getElementById("turnBulbOff");
//Get the light-bulb-off.png
//Make a function to change the image
function turnLightOff() {
  img.src = "light-bulb-off.png";
}
//Use addEventListener for the click
offButton.addEventListener("click", turnLightOff);