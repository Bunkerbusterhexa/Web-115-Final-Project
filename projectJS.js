// Define an object to store meal plan data
let mealPlan = {};

// Function to generate meal plan
function generateMealPlan() {
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
        // Store meal plan data
        mealPlan.name = document.getElementById('name').value;
        mealPlan.email = email;
        mealPlan.goal = document.getElementById('goal').value;
        
        // Get meal inputs for each day of the week
        mealPlan.mondayBreakfast = document.getElementById('mondayBreakfast').value;
        // Repeat for other meals and days of the week
        
        // Display meal plan
        displayMealPlan();
    } else {
        alert('Please enter a valid email address.');
    }
}

// Function to display meal plan
function displayMealPlan() {
    let mealPlanOutput = "<h2>Meal Plan for " + mealPlan.name + "</h2>";
    // Display meal plan for each day
    // Concatenate mealPlanOutput with each meal for each day
    
    // Display personal information
    mealPlanOutput += "<p><strong>Email:</strong> " + mealPlan.email + "</p>";
    mealPlanOutput += "<p><strong>Goal for the Week:</strong><br>" + mealPlan.goal + "</p>";

    // Display meal plan on a new page
    document.open();
    document.write(mealPlanOutput);
    document.close();
}

// Function to validate email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to clear meal planner
function clearPlanner() {
    // Clear meal plan data
    mealPlan = {};
    // Clear input fields
    document.getElementById('mealPlanForm').reset();
}

// Function to print meal planner
function printPlanner() {
    window.print();
}

// Function to download meal planner
function downloadPlanner() {
    // Generate a downloadable file with meal plan data
    const filename = "meal_plan.txt";
    const data = JSON.stringify(mealPlan, null, 2);
    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
