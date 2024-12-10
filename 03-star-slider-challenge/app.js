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

const slider = document.getElementById("starSlider");
const starContainer = document.getElementById("stars");
const star = document.querySelector(".star-icon");

function starCounter(){
  
  //Remove all stars instantly when function is called
  starContainer.innerHTML = "";

  const starCount = parseInt(slider.value);

  for(let i = 0; i < starCount; i++){
    console.log('This is an iteration');
    //const newStar = star.cloneNode();
  const clone = star.cloneNode(true);
  starContainer.appendChild(clone);

  }
}

slider.addEventListener("input", starCounter);
