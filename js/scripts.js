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

function resetbutton() {
  document.getElementById("form-submit-button").removeAttribute("class");
  document.getElementById("resetbutton").setAttribute("class", "hidden");
  document.getElementById("result").setAttribute("class", "hidden");

  document.querySelector("input[name='rain']:checked").value = "yes";
  document.querySelector("input[name='vacation']:checked").value = "warm";
  document.querySelector("input[name='dogOrCat']:checked").value = "cold";
  document.querySelector("input[name='sports']:checked").value = "dog";
  document.querySelector("input[name='beach']:checked").value = "yes";

};

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let resetbutton = document.getElementById("resetButton");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    // form.addEventListener("submit", getInputsAndCalc);
    langRecommendation = getInputsAndCalc();
    // document.getElementById("radio-form").addEventListener("submit", getInputsAndCalc);
    document.getElementById("result").removeAttribute("class");
    document.getElementById("form-submit-button").setAttribute("class", "hidden");
    document.getElementById("result").innerText = "You should learn to program in " + langRecommendation;
    document.getElementById("resetButton").removeAttribute("class");

    resetbutton.addEventListener("click", resetbutton);
  })

  

});