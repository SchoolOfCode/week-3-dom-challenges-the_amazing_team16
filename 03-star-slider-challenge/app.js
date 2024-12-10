/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!
// Grab the slider value
// Grab the value of stars
// Grab div containing stars
// Make a function that adds/removes star spans depending on value of slider
// Attach event listener to slider that instantly updates amount of stars

const sliderValue = document.getElementById("starSlider").value;
const starContainer = document.getElementById("stars");
const star = document.querySelector(".star-icon");

 const starCount = parseInt(starSlider.value);
 console.log(starCount);

function starCounter(){
  for(let i = 1; i < starCount; i++){
    starContainer.appendChild(star);
    //document.body.appendChild(newElement)
  }
}

starContainer.addEventListener("input", starCounter);
