// Business logic

// translates input selection to 1 or 0
function rain(rainSelection) {
  let totalPoints;
  if (rainSelection === "yes") {
    totalPoints = 1;
  } else {
    totalPoints = 0;
  }
  return totalPoints;
};

// translates input selection to 1 or 0
function vacation(vacationSelection) {
  let totalPoints;
  if (vacationSelection === "warm") {
    totalPoints = 1;
  } else {
    totalPoints = 0;
  }
  return totalPoints;
};

// translates input selection to 1 or 0
function dogOrCat(dogOrCatSelection) {
  let totalPoints;
  if (dogOrCatSelection === "dog") {
    totalPoints = 1;
  } else {
    totalPoints = 0;
  }
  return totalPoints;
};

// translates input selection to 1 or 0
function sports(sportsSelection) {
  let totalPoints;
  if (sportsSelection === "yes") {
    totalPoints = 1;
  } else {
    totalPoints = 0;
  }
  return totalPoints;
};

// translates input selection to 1 or 0
function beachOrHiking(beachOrHikingSelection) {
  let totalPoints;
  if (beachOrHikingSelection === "beach") {
    totalPoints = 1;
  } else {
    totalPoints = 0;
  }
  return totalPoints;
};

// Calculates which language to learn
function getInputsAndCalc() {
  // get inputs
  const rainSelection = document.querySelector("input[name='rain']:checked").value;
  const vacationSelection = document.querySelector("input[name='vacation']:checked").value;
  const dogOrCatSelection = document.querySelector("input[name='dog-cat']:checked").value;
  const sportsSelection = document.querySelector("input[name='sports']:checked").value;
  const beachOrHikingSelection = document.querySelector("input[name='beach']:checked").value;

  let totalPoints = 0;

  totalPoints += rain(rainSelection);
  totalPoints += vacation(vacationSelection);
  totalPoints += dogOrCat(dogOrCatSelection);
  totalPoints += sports(sportsSelection);
  totalPoints += beachOrHiking(beachOrHikingSelection);
  
  let langRecommendation;
  if (totalPoints > 3) {
    langRecommendation = "Python";
  } else if (totalPoints < 4 && totalPoints > 1) {
    langRecommendation = "JavaScript";
  } else {
    langRecommendation = "Go";
  }
  return langRecommendation;
};

// Calculates the "A little bit about the language:" output
function langSummary(langRecommendation) {
  let langSummary;
  if (langRecommendation === "Python") {
    langSummary = "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. It is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a 'batteries included' language due to its comprehensive standard library.";
  } else if (langRecommendation === "JavaScript") {
    langSummary = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.";
  } else {
    langSummary = "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. It is often referred to as Golang because of its former domain name, golang.org, but its proper name is Go.";
  }
  return langSummary;
};

// User Interface logic

// Actions to take place when reset button is clicked
function reset() {
  // Unhide form submit button
  document.getElementById("form-submit-button").setAttribute("class", "btn btn-primary btn-lg");
  // Hide the results section and reset button
  document.getElementById("result").setAttribute("class", "hidden");
  document.getElementById("reset-btn").setAttribute("class", "hidden");

  // Reset form inputs to default values
  document.getElementById("rain-default").checked = true;
  document.getElementById("vacation-default").checked = true;
  document.getElementById("dog-default").checked = true;
  document.getElementById("sports-default").checked = true;
  document.getElementById("beach-default").checked = true;
};

// Wait for page to load, then run these functions
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let resetBtn = document.getElementById("reset-btn");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Collect inputs and calculate recommended languange;
    let langRecommendation = getInputsAndCalc();
    let langSummaryText = langSummary(langRecommendation);
    
    // Unhide results
    document.getElementById("result").setAttribute("class", "bottom");

    // Hide the form submit button
    document.getElementById("form-submit-button").setAttribute("class", "hidden");

    // Update results messaging with recommendation from survey
    document.getElementById("resultText").innerText = "Learn " + langRecommendation + "!";
    // Update results messaging that provides detail from Wikipedia about lang
    document.getElementById("resultSummary").innerText = langSummaryText;

    // Unhide the reset button
    document.getElementById("reset-btn").setAttribute("class","btn btn-outline-warning");
    // Event Listener for clicking the reset button
    resetBtn.addEventListener("click", reset);
  });
});