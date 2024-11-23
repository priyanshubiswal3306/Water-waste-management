// Set a daily water usage goal
const dailyWaterGoal = 50; // Goal in liters
let totalWaterUsage = 0;

// Function to add water usage and update the tracker
function addWaterUsage() {
    const waterInput = document.getElementById("water-input");
    const usage = parseFloat(waterInput.value);

    if (isNaN(usage) || usage <= 0) {
        alert("Please enter a valid water usage amount.");
        return;
    }

    totalWaterUsage += usage;
    updateTracker();
    waterInput.value = ""; // Clear input
}

// Function to update tracker display
function updateTracker() {
    document.getElementById("total-water").textContent = totalWaterUsage;
    document.getElementById("water-progress").value = totalWaterUsage;

    // Check if goal is reached
    if (totalWaterUsage >= dailyWaterGoal) {
        alert("Congratulations! You've reached your water conservation goal for the day.");
    }
}

// Initialize tracker with default values
document.getElementById("water-goal").textContent = dailyWaterGoal;
document.getElementById("water-progress").max = dailyWaterGoal;
