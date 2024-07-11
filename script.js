import wordData from "./words.js";

let currentIndex = -1;

function getRandomIndex() {
  return Math.floor(Math.random() * wordData.length);
}

function displayRandomWord() {
  currentIndex = getRandomIndex();
  const currentWord = wordData[currentIndex];
  document.querySelector(".word").textContent = currentWord.word;
  document.querySelector(".meaning").textContent = currentWord.definition;
}

function revealMeaning() {
  document.querySelector(".meaning").style.display = "block";
}

function nextWord() {
  displayRandomWord();
  document.querySelector(".meaning").style.display = "none";
}

// Initial display
displayRandomWord();

// Event listeners
document
  .getElementById("revealButton")
  .addEventListener("click", revealMeaning);
document.getElementById("nextButton").addEventListener("click", nextWord);

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check if dark mode is enabled (e.g., based on user preferences)
const isDarkModeEnabled = /* Your logic to determine dark mode status */ false;

// Set initial mode based on user preferences
if (isDarkModeEnabled) {
  body.classList.add("dark-mode");
}

// Toggle dark mode
darkModeToggle.addEventListener("click", () => {
  darkModeToggle.textContent =
    darkModeToggle.textContent == "Light" ? "Dark" : "Light";
  body.classList.toggle("dark-mode");
  // Save user preference (e.g., in local storage) if needed
});
