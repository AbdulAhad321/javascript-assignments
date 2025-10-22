// Get elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const deleteAllBtn = document.getElementById("delete-all-btn");
const list = document.getElementById("todo-list");

// Add task
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Delete single task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  // Add to list
  list.appendChild(li);

  // Clear input
  input.value = "";
});

// Delete all tasks
deleteAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all tasks?")) {
    list.innerHTML = "";
  }
});

// Allow pressing Enter key to add task
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
