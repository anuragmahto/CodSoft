// Function to toggle a 'hidden' class for the resume section
function toggleResume() {
    var resumeSection = document.getElementById("resume");
    resumeSection.classList.toggle("hidden");
}

// Add a click event listener to the "Download Resume" link
var resumeLink = document.querySelector("#resume a");
resumeLink.addEventListener("click", toggleResume);

// Function to close the resume section when the X button is clicked
function closeResume() {
    var resumeSection = document.getElementById("resume");
    resumeSection.classList.add("hidden");
}

// Add a click event listener to the X button in the resume section
var closeBtn = document.createElement("button");
closeBtn.textContent = "X";
closeBtn.addEventListener("click", closeResume);
document.getElementById("resume").appendChild(closeBtn);