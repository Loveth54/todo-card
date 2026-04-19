const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const title = document.querySelector('[data-testid="test-todo-title"]');
const status = document.querySelector('[data-testid="test-todo-status"]');
const timeRemaining = document.querySelector('[data-testid="test-todo-time-remaining"]');

const dueDate = new Date(Date.now() + 2 * 60 * 1000);

function updateTimeRemaining() {
    const now = new Date();
    const diff = dueDate - now;

    if (diff <= 0) {
        timeRemaining.textContent = "Overdue!";
        return;
    }

    const seconds = Math.floor(diff / 1000);
    timeRemaining.textContent = `Due in ${seconds} seconds`;
}

updateTimeRemaining();
let timer = setInterval(updateTimeRemaining, 1000);

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        title.style.textDecoration = "line-through";
        status.textContent = "Done";

        clearInterval(timer);
        timeRemaining.textContent = "Task Completed";
    } else {
        title.style.textDecoration = "none";
        status.textContent = "Pending";

        updateTimeRemaining();
        timer = setInterval(updateTimeRemaining, 1000);
    }
});

document.querySelector('[data-testid="test-todo-edit-button"]')
  .addEventListener("click", () => alert("Edit clicked"));

document.querySelector('[data-testid="test-todo-delete-button"]')
  .addEventListener("click", () => alert("Delete clicked"));