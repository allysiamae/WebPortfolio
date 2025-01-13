let clickCount = 0;
document.getElementById('clickButton').addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCount').innerText = clickCount;
});

// Function to update the clock
function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('clock').innerText = now.toLocaleTimeString([], options);
    
    // Update greeting based on the time of day
    const hours = now.getHours();
    let greeting;
    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById('greeting').innerText = greeting;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Theme toggle functionality
document.getElementById('themeToggle').addEventListener('click', function() {
    const body = document.getElementById('body');
    body.classList.toggle('bg-dark');
    body.classList.toggle('bg-light');
});

// Contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Message sent!'); // Show a message to the user
    this.reset(); // Reset the form fields
});

// To-Do List functionality
document.getElementById('addTodoButton').addEventListener('click', function() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText) {
        const todoList = document.getElementById('todoList');
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = todoText;

        // Create a delete button for each to-do item
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            todoList.removeChild(listItem); // Remove the item from the list
        };

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem); 
        todoInput.value = ''; 
    } else {
        alert('Please enter a task.'); 
    }
});

// Random Quote functionality
const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only way to do great work is to love what you do.",
    "Success is not how high you have climbed, but how you make a positive difference to the world."
];

document.getElementById('randomQuoteButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerText = quotes[randomIndex];
});

// Initial call to set the clock and greeting
updateClock();