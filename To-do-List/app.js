let tasks = [];

//const saveTasks = () => {
    //localStorage.setItem("tasks", JSON.stringify(tasks));
//};

const addTask = () => {
    const taskInput =document.getElementById("taskInput");
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        //taskInput.value = "";
        updateTasksList();
        //updateStats();
        //saveTasks();
    }  
    //console.log(tasks);   
};

const updateTasksList = () => {                        //check
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <div class="taskItem">
           <div class="task ${task.completed ? "completed" : ""}">
             <input type="checkbox" class="checkbox"   ${
                task.completed ? "checked" : ""
             }/>
             <p>${task.text}</p>
            </div>
            <div class="icons">
             <img src="edit.jpg" onClick="editTask(${index})" />
             <img src="delete.jpg" onClick="deleteTask(${index})" />
            </div>
        </div>      
        `;
        listItem.addEventListener("change", () => toggleTComplete(index));
        taskList.append(listItem);
    });
};

document.getElementById("newTask").addEventListener("click", function(e) {
    e.preventDefault();

    addTask();
}); 