document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const todoImage = document.getElementById("todo");

    // Add new task
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = ""; // Clear input field
            todoImage.classList.add("hidden"); // Hide the image
        }
    });

    // Function to add task to the list
    function addTask(taskText) {
        const li = document.createElement("li");

        // Task text
        const span = document.createElement("span");
        span.textContent = taskText;
        li.appendChild(span);

        // Complete task button
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", () => {
            li.classList.toggle("completed");
        });
        li.appendChild(completeButton);

        // Edit task button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            const newTaskText = prompt("Edit task", span.textContent);
            if (newTaskText) {
                span.textContent = newTaskText;
            }
        });
        li.appendChild(editButton);

        // Delete task button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);

            // Show the image again if no tasks are left
            if (taskList.children.length === 0) {
                todoImage.classList.remove("hidden");
            }
        });
        li.appendChild(deleteButton);

        // Insert the task above the image
        taskList.appendChild(li);
    }
});
