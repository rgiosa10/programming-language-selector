// Business logic

function rain (rainSelection) {
  if (rainSelection === "Yes") {
    totalPoints += 1;
  } else {
    totalPoints += 0;
  }
};

function vacation (vacationSelection) {
  if (vacationSelection === "Warm") {
    totalPoints += 1;
  } else {
    totalPoints += 0;
  }
};

function dogOrCat (dogOrCatSelection) {
  if (dogOrCat === "Dog") {
    totalPoints += 1;
  } else {
    totalPoints += 0;
  }
};

function sports (sportsSelection) {
  if (sportsSelection === "Yes") {
    totalPoints += 1;
  } else {
    totalPoints += 0;
  }
};

function beachOrHiking (beachOrHikingSelection) {
  if (beachOrHikingSelection === "Beach") {
    totalPoints += 1;
  } else {
    totalPoints += 0;
  }
};

function pickLang(totalPoints) {
  if (totalPoints === 5) {
    langRecommendation = "Python";
  } else if ( totalPoints < 5 && totalPoints > 1) {
    langRecommendation = "JavaScript";
  } else {
    langRecommendation = "Go";
  }
  return langRecommendation;
};


function getInputsAndCalc() {
  // get inputs
  const rainSelection = document.querySelector("input[name='rain']:checked").value;
  const vacationSelection = document.querySelector("input[name='vacation']:checked").value;
  const dogOrCatSelection = document.querySelector("input[name='dogOrCat']:checked").value;
  const sportsSelection = document.querySelector("input[name='sports']:checked").value;
  const beachOrHikingSelection = document.querySelector("input[name='beachOrHiking']:checked").value;

  let totalPoints = 0;

  rain (rainSelection);
  vacation (vacationSelection);
  dogOrCat (dogOrCatSelection);
  sports (sportsSelection);
  beachOrHiking (beachOrHikingSelection);

  pickLang(totalPoints);


  // calculate recommended language

  

}

// User Interface logic


function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='flavor']:checked").value;
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});