const title = document.querySelector('[data-testid="test-todo-title"]');
const desc = document.querySelector('[data-testid="test-todo-description"]');
const status = document.querySelector('[data-testid="test-todo-status"]');
const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const statusControl = document.querySelector('[data-testid="test-todo-status-control"]');

const timeText = document.querySelector('[data-testid="test-todo-time-remaining"]');
const overdue = document.querySelector('[data-testid="test-todo-overdue-indicator"]');
const dueDateEl = document.querySelector('[data-testid="test-todo-due-date"]');

const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');
const form = document.querySelector('[data-testid="test-todo-edit-form"]');

const saveBtn = document.querySelector('[data-testid="test-todo-save-button"]');
const cancelBtn = document.querySelector('[data-testid="test-todo-cancel-button"]');

const titleInput = document.querySelector('[data-testid="test-todo-edit-title-input"]');
const descInput = document.querySelector('[data-testid="test-todo-edit-description-input"]');
const prioritySelect = document.querySelector('[data-testid="test-todo-edit-priority-select"]');
const dueInput = document.querySelector('[data-testid="test-todo-edit-due-date-input"]');

const expandBtn = document.querySelector('[data-testid="test-todo-expand-toggle"]');
const collapsible = document.querySelector('[data-testid="test-todo-collapsible-section"]');
const indicator = document.querySelector('[data-testid="test-todo-priority-indicator"]');

let dueDate = new Date(Date.now() + 5 * 60 * 1000);
let timer;

dueDateEl.textContent = dueDate.toLocaleString();


function updateTime() {
  if (status.textContent === "Done") return;

  const diff = dueDate - new Date();

  if (diff <= 0) {
    timeText.textContent = "Overdue";
    overdue.textContent = "⚠ Overdue";
    overdue.style.color = "red";
    return;
  }

  const seconds = Math.floor(diff / 1000);

  if (seconds < 60) {
    timeText.textContent = `Due in ${seconds} sec`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    timeText.textContent = `Due in ${minutes} min`;
  } else {
    const hours = Math.floor(seconds / 3600);
    timeText.textContent = `Due in ${hours} hr`;
  }
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

startTimer();


function setStatus(value) {
  status.textContent = value;
  statusControl.value = value;

  if (value === "Done") {
    checkbox.checked = true;
    title.classList.add("done");
    clearInterval(timer);
    timeText.textContent = "Completed";
  } else {
    checkbox.checked = false;
    title.classList.remove("done");
    startTimer();
  }
}

checkbox.addEventListener("change", () => {
  setStatus(checkbox.checked ? "Done" : "Pending");
});

statusControl.addEventListener("change", () => {
  setStatus(statusControl.value);
});


editBtn.onclick = () => {
  form.classList.remove("hidden");
  editBtn.style.display = "none";
  deleteBtn.style.display = "none";

  titleInput.value = title.textContent;
  descInput.value = desc.textContent;
};

cancelBtn.onclick = () => {
  form.classList.add("hidden");
  editBtn.style.display = "inline-block";
  deleteBtn.style.display = "inline-block";
};

saveBtn.onclick = () => {
  title.textContent = titleInput.value;
  desc.textContent = descInput.value;

  const selectedPriority = prioritySelect.value;

  
  document.querySelector('[data-testid="test-todo-priority"]').textContent = selectedPriority;


  indicator.className = `priority ${selectedPriority.toLowerCase()}`;

  dueDate = new Date(dueInput.value);

  form.classList.add("hidden");
  editBtn.style.display = "inline-block";
  deleteBtn.style.display = "inline-block";

  startTimer();
};



expandBtn.onclick = () => {
const expanded = collapsible.classList.toggle("expanded");
expandBtn.textContent = expanded ? "Collapse" : "Expand";
};


deleteBtn.onclick = () => alert("Delete clicked");