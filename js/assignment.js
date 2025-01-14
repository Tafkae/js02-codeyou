"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution");
const willMeetResolutionElement = document.getElementById(
  "will-meet-resolution"
);
const submissionBtn = document.getElementById("submission-btn");

// Declare your variables here.
const resolution = "Get a better job!";

const currentYear = (function () {
  const today = new Date();
  return today.getFullYear();
})();

let willMeetResolution = true;

function updateYear() {
  yearElement.innerText = currentYear;
}

function updateResolution() {
  resolutionElement.innerText = resolution;
  willMeetResolutionElement.innerText = willMeetResolution ? "YEA" : "NAH";
}

function render() {
  updateYear();
  updateResolution();
}

submissionBtn.addEventListener("click", function () {
  render();
});
