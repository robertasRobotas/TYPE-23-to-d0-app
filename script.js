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

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const buildCards = () => {
  taskInput.value = "";
  tasksWrapper.innerHTML = "";

  [...tasks].reverse().forEach((t) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    card.addEventListener("click", () => {
      const index = tasks.findIndex((i) => i.title === t.title);

      tasks[index].isDone = !tasks[index].isDone;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      buildCards();
    });

    const title = document.createElement("h4");
    title.textContent = t.title;

    const indicator = document.createElement("div");

    indicator.setAttribute(
      "class",
      `indicator ${t.isDone === true ? "completed" : "not-completed"}`
    );

    card.append(title);
    card.append(indicator);

    tasksWrapper.append(card);
  });
};

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

  localStorage.setItem("tasks", JSON.stringify(tasks));

  buildCards();
});

buildCards();
