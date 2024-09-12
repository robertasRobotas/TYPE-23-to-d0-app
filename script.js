const taskInput = document.getElementById("task");
const button = document.getElementById("add-task-btn");
const tasksWrapper = document.getElementById("tasks-wrapper");

const validate = (taskValue) => {
  if (taskValue.length < 3) {
    console.log("Task is too short");
    return false;
  } else {
    return true;
  }
};

const tasks = [];

button.addEventListener("click", () => {
  const isValid = validate(taskInput.value);
  if (!isValid) {
    return;
  }

  const task = {
    title: taskInput.value,
    isDone: false,
    creationDate: new Date(),
  };

  tasks.push(task);

  taskInput.value = "";
  tasksWrapper.innerHTML = "";

  tasks.forEach((t) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const title = document.createElement("h4");
    title.textContent = t.title;

    card.append(title);

    tasksWrapper.append(card);
  });
});
