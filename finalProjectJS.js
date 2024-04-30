// Define an object to store meal plan data
let mealPlan = {};

// Define an array to store the days of the week
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Initialize the day index
let currentDayIndex = 0;

// Function to generate meal plan for the current day
function generateMealPlan() {
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
        // Store meal plan data
        mealPlan.name = document.getElementById('name').value;
        mealPlan.email = email;
        mealPlan.goal = document.getElementById('goal').value;

        // Loop through each day of the week
        for (let i = 0; i < daysOfWeek.length; i++) {
            const currentDay = daysOfWeek[i];
            mealPlan[currentDay] = {}; // Create an object to store meals for the current day
            mealPlan[currentDay].breakfast = document.getElementById(currentDay.toLowerCase() + 'Breakfast').value;
            mealPlan[currentDay].lunch = document.getElementById(currentDay.toLowerCase() + 'Lunch').value;
            mealPlan[currentDay].snack1 = document.getElementById(currentDay.toLowerCase() + 'Snack1').value;
            mealPlan[currentDay].dinner = document.getElementById(currentDay.toLowerCase() + 'Dinner').value;
            mealPlan[currentDay].snack2 = document.getElementById(currentDay.toLowerCase() + 'Snack2').value;
        }

        // Display meal plan for all days
        displayMealPlan();
    } else {
        alert('Please enter a valid email address.');
    }
}

// Function to display meal plan for all days
function displayMealPlan() {
    let mealPlanOutput = "<h2>Meal Plan for " + mealPlan.name + "</h2>";
    // Loop through each day of the week
    for (let i = 0; i < daysOfWeek.length; i++) {
        const currentDay = daysOfWeek[i];
        mealPlanOutput += "<h3>" + currentDay + "</h3>";
        mealPlanOutput += "<p><strong>Breakfast:</strong> " + mealPlan[currentDay].breakfast + "</p>";
        mealPlanOutput += "<p><strong>Lunch:</strong> " + mealPlan[currentDay].lunch + "</p>";
        mealPlanOutput += "<p><strong>Snack 1:</strong> " + mealPlan[currentDay].snack1 + "</p>";
        mealPlanOutput += "<p><strong>Dinner:</strong> " + mealPlan[currentDay].dinner + "</p>";
        mealPlanOutput += "<p><strong>Snack 2:</strong> " + mealPlan[currentDay].snack2 + "</p>";
    }

    // Display personal information
    mealPlanOutput += "<p><strong>Email:</strong> " + mealPlan.email + "</p>";
    mealPlanOutput += "<p><strong>Goal for the Week:</strong><br>" + mealPlan.goal + "</p>";

    // Open meal plan in a new window
    const mealPlanWindow = window.open('', '_blank');
    mealPlanWindow.document.write(mealPlanOutput);
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
    // Get the user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;

    // Get the input values for each day of the week
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let mealPlanContent = `<h2>Meal Plan for ${name}</h2>`;
    daysOfWeek.forEach(day => {
        mealPlanContent += `<h3>${day}</h3>`;
        mealPlanContent += `<p><strong>Breakfast:</strong> ${document.getElementById(day.toLowerCase() + 'Breakfast').value}</p>`;
        mealPlanContent += `<p><strong>Lunch:</strong> ${document.getElementById(day.toLowerCase() + 'Lunch').value}</p>`;
        mealPlanContent += `<p><strong>Snack 1:</strong> ${document.getElementById(day.toLowerCase() + 'Snack1').value}</p>`;
        mealPlanContent += `<p><strong>Dinner:</strong> ${document.getElementById(day.toLowerCase() + 'Dinner').value}</p>`;
        mealPlanContent += `<p><strong>Snack 2:</strong> ${document.getElementById(day.toLowerCase() + 'Snack2').value}</p>`;
    });

    // Add user information to the content
    mealPlanContent += `<p><strong>Email:</strong> ${email}</p>`;
    mealPlanContent += `<p><strong>Goal for the Week:</strong><br>${goal}</p>`;

    // Open a new window for printing
    const printWindow = window.open('', '_blank');

    // Write the meal plan content to the new window
    printWindow.document.write(mealPlanContent);

    // Trigger printing
    printWindow.print();
}


// Function to download meal planner
function downloadPlanner() {
    // Get the user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;

    // Get the input values for each day of the week
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let mealPlanContent = `<h2>Meal Plan for ${name}</h2>`;
    daysOfWeek.forEach(day => {
        mealPlanContent += `<h3>${day}</h3>`;
        mealPlanContent += `<p><strong>Breakfast:</strong> ${document.getElementById(day.toLowerCase() + 'Breakfast').value}</p>`;
        mealPlanContent += `<p><strong>Lunch:</strong> ${document.getElementById(day.toLowerCase() + 'Lunch').value}</p>`;
        mealPlanContent += `<p><strong>Snack 1:</strong> ${document.getElementById(day.toLowerCase() + 'Snack1').value}</p>`;
        mealPlanContent += `<p><strong>Dinner:</strong> ${document.getElementById(day.toLowerCase() + 'Dinner').value}</p>`;
        mealPlanContent += `<p><strong>Snack 2:</strong> ${document.getElementById(day.toLowerCase() + 'Snack2').value}</p>`;
    });

    // Add user information to the content
    mealPlanContent += `<p><strong>Email:</strong> ${email}</p>`;
    mealPlanContent += `<p><strong>Goal for the Week:</strong><br>${goal}</p>`;

    // Create a Blob containing the HTML content
    const blob = new Blob([mealPlanContent], { type: 'text/html' });

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'meal_plan.html';

    // Trigger a click event on the anchor element to start the download
    a.click();

    // Clean up by revoking the Object URL
    URL.revokeObjectURL(a.href);
}






