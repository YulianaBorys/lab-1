let task = null;

function getTask() {
    return task;
}

function addTask(newTask) {
    if (task !== null) {
        return { isSuccess: false, errorMessage: "Task already exists. Use update function" };
    }

    if (!newTask == null) {
        return { isSuccess: false, errorMessage: "New task can't be empty" };
    }

    task = newTask;
    return { isSuccess: true };
}

function updateTask(newTask) {
    if (task === null) {
        return { isSuccess: false, errorMessage: "There is no task. Please use add option" };
    }

    if (!newTask) {
        return { isSuccess: false, errorMessage: "New task can't be empty" };
    }

    task = newTask;
    return { isSuccess: true };
}

function deleteTask() {
    if (task === null) {
        return { isSuccess: false, errorMessage: "There is no task. Please use add option" };
    }

    task = null;
    return { isSuccess: true };
}

function promptToEnterTask() {
    let newTask = prompt("Enter a new task:");
    let result = addTask(newTask);
    
    if (result.isSuccess) {
        console.log("Task added successfully");
    } else {
        alert(result.errorMessage);
    }
}

function promptToUpdateTask() {
    let newTask = prompt("Enter a new value for the task:");
    let result = updateTask(newTask);
    
    if (result.isSuccess) {
        console.log("Task updated successfully");
    } else {
        alert(result.errorMessage);
    }
}

function displayTaskToConsole() {
    let currentTask = getTask();
    if (currentTask) {
        console.log(`Current task: ${currentTask}`);
    } else {
        console.log("No active task");
    }
}

function displayTaskToAlert() {
    let currentTask = getTask();
    if (currentTask) {
        alert(`Current task: ${currentTask}`);
    } else {
        alert("No active task");
    }
}