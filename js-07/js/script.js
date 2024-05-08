let tasks = [];

const form = document.querySelector(".form");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

const renderTask = () => {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const html = `
            <li data-id="${task.id}" class="tasks__item">
                <p class="${task.complete && "done"}">${task.title}</p>
                <div>
                    <i class="bx bx-check"></i>
                    <i class="bx bx-trash"></i>
                </div>
            </li>
        `;

    //   const li = document.createElement("li");
    //   li.addEventListener('click', () => {})

    taskList.innerHTML += html;
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (title.length >= 3) {
    // console.log(title);

    const task = {
      id: Date.now(),
      title,
      complete: false,
    };

    tasks.push(task);

    // console.log(task, tasks);

    taskInput.value = "";

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTask();
  } else {
    // alert("La tarea tiene que tener 3 caracteres o mas");

    const error = document.querySelector(".error");
    error.textContent = "La tarea tiene que tener 3 caracteres o mas";

    setTimeout(() => {
      error.textContent = "";
    }, 2000);
  }

  //   console.log(event);
});

// const bxCheck = document.querySelector(".bx-check");
// console.log(bxCheck);
// bxCheck.addEventListener("click", () => {
//   console.log("Click en bx-check");
// });

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("bx-check")) {
    console.log(tasks);
    const id = event.target.closest("li").dataset.id;
    // console.log(event.target.closest("li"));
    // console.log(id);

    const task = tasks.find((task) => task.id == id);
    task.complete = !task.complete;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    // renderTask();
    event.target.closest("li").querySelector("p").classList.toggle("done");
    // const html = `
    //     <li data-id="${task.id}" class="tasks__item">
    //         <p class="${task.complete && "done"}">${task.title}</p>
    //         <div>
    //             <i class="bx bx-check"></i>
    //             <i class="bx bx-trash"></i>
    //         </div>
    //     </li>
    // `;
  }

  if (event.target.classList.contains("bx-trash")) {
    const id = event.target.closest("li").dataset.id;
    const taskindex = tasks.findIndex((task) => task.id == id);

    tasks.splice(taskindex, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    event.target.closest("li").remove();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  renderTask();
});
