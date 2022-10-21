// Business logic

function rain (rainSelection) {
  let totalPoints;
  if (rainSelection === "yes") {
    totalPoints = 1;
  } else {
    totalPoints = 0;
  }
  return totalPoints;
};

function vacation (vacationSelection) {
  let totalPoints;
  if (vacationSelection === "warm") {
    totalPoints = 1;
  } else {
    totalPoints = 0;
  }
  return totalPoints;
};

function dogOrCat (dogOrCatSelection) {
  let totalPoints;
  if (dogOrCatSelection === "dog") {
    totalPoints = 1;
  } else {
    totalPoints = 0;
  }
  return totalPoints;
};

function sports (sportsSelection) {
  let totalPoints;
  if (sportsSelection === "yes") {
    totalPoints = 1;
  } else {
    totalPoints = 0;
  }
  return totalPoints;
};

function beachOrHiking (beachOrHikingSelection) {
  let totalPoints;
  if (beachOrHikingSelection === "beach") {
    totalPoints = 1;
  } else {
    totalPoints = 0;
  }
  return totalPoints;
};

function getInputsAndCalc() {
  // get inputs
  const rainSelection = document.querySelector("input[name='rain']:checked").value;
  const vacationSelection = document.querySelector("input[name='vacation']:checked").value;
  const dogOrCatSelection = document.querySelector("input[name='dogOrCat']:checked").value;
  const sportsSelection = document.querySelector("input[name='sports']:checked").value;
  const beachOrHikingSelection = document.querySelector("input[name='beach']:checked").value;

  let totalPoints = 0;

  totalPoints += rain (rainSelection);
  totalPoints += vacation (vacationSelection);
  totalPoints += dogOrCat (dogOrCatSelection);
  totalPoints += sports (sportsSelection);
  totalPoints += beachOrHiking (beachOrHikingSelection);
  
  if (totalPoints === 5) {
    langRecommendation = "Python";
  } else if ( totalPoints < 5 && totalPoints > 1) {
    langRecommendation = "JavaScript";
  } else {
    langRecommendation = "Go";
  }
  return langRecommendation;
};

// User Interface logic

function reset() {
  
  // Unhide form submit button
  document.getElementById("form-submit-button").setAttribute("class", "btn btn-primary btn-lg");
  // Hide the results section that includes reset button
  document.getElementById("result").setAttribute("class", "hidden");

  // Reset form inputs to default values
  document.getElementById("rainDefault").checked = true;
  document.getElementById("vacationDefault").checked = true;
  document.getElementById("dogOrCatDefault").checked = true;
  document.getElementById("sportsDefault").checked = true;
  document.getElementById("beachDefault").checked = true;
};

// Wait for page to load, then run these functions
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let resetBtn = document.getElementById("resetBtn");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Collect inputs and calculate recommended languange;
    langRecommendation = getInputsAndCalc();
    
    // Unhide results
    document.getElementById("result").setAttribute("class", "bottom");

    // Hide the form submit button
    document.getElementById("form-submit-button").setAttribute("class", "hidden");

    // Update results messaging with recommendation from survey
    document.getElementById("resultText").innerText = "You should learn to program in " + langRecommendation;

    // Unhide the reset button
    document.getElementById("resetBtn").removeAttribute("class");
    // Event Listener for clicking the reset button
    resetBtn.addEventListener("click", reset);
  });
});