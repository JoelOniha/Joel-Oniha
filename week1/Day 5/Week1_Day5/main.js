
        class toDo {
            constructor(task) {
                this.task = task;
            }
        }

        class UI {
            constructor() {
                this.form = document.getElementById("form");
                this.task = document.getElementById("task-input");
                this.tableBody = document.getElementById("table-body")
                this.form.addEventListener('submit', (e) => this.onFormSubmit(e));

                this.tasks = [];
                this.loadTasksFromLocalStorage();
                this.rendertoDoTable();
            }

            onFormSubmit(e) {
                e.preventDefault();

                if (this.task.value.trim() === "") {
                    return;
                }
                const todo = new toDo(this.task.value);

                this.tasks.push(todo);

                this.saveTasksToLocalStorage();
                this.renderToDoTable();

                this.task.value = "";
            }

            renderToDoTable() {
                this.tableBody.innerHTML = "";

                for (let i = 0; i < this.tasks.length; i++) {
                    const todo = this.tasks[i];

                    const tr = this.createToDoRow(todo);
                    this.tableBody.appendChild(tr);
                }
            }

            createToDoRow(todo) {
                const tr = document.createElement("tr");

                const tdTask = document.createElement("td");
                const tdActions = document.createElement("td");
                const tdComplete = document.createElement("td");

                tdTask.textContent = todo.task;

                const radioBox = document.createElement("input");
                radioBox.setAttribute("type", "radio");

                const radioBoxWrapper = document.createElement("div");
                radioBoxWrapper.appendChild(radioBox);

                const deleteButton = document.createElement("button");
                deleteButton.setAttribute("class", "btn btn-danger btn-sm");
                deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
                deleteButton.addEventListener("click", () => this.onRemoveToDoClicked(todo));

                const deleteButtonWrapper = document.createElement("div");
                deleteButtonWrapper.appendChild(deleteButton);

                tdActions.appendChild(radioBoxWrapper);
                tdComplete.appendChild(deleteButtonWrapper);

                tr.appendChild(tdTask);
                tr.appendChild(tdActions);
                tr.appendChild(tdComplete);

                return tr;
            }

            createActionButtons(todo) {
                const deleteButton = document.createElement("button");
                const radioBox = document.createElement("input");
                deleteButton.setAttribute("class", "btn btn-danger btn-sm");
                deleteButton.innerHTML = "Delete";
                deleteButton.addEventListener("click", () => this.onRemoveToDoClicked(todo));

                radioBox.setAttribute("type", "radio");

                return [deleteButton, radioBox];
            }

            onRemoveToDoClicked(todo) {
                this.tasks = this.tasks.filter((x) => {
                    return todo.task !== x.task;
                });
                this.saveTasksToLocalStorage();
                this.renderToDoTable();
            }

            saveTasksToLocalStorage() {
                const json = JSON.stringify(this.tasks);
                localStorage.setItem("tasks", json);
            }

            loadTasksFromLocalStorage() {
                const json = localStorage.getItem("tasks");
                if (json) {
                    const taskArr = JSON.parse(json);
                    this.tasks = taskArr.map((x) => new toDo(x.task));
                }
            }
        }

        const ui = new UI();
   