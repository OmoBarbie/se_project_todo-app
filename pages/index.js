import { v4 as uuidv4 } from "https://jspm.dev/uuid";
console.log(uuidv4());

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  return todo.getView();
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todoElement = generateTodo(item);
    section.addItem(todoElement);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

// Modal Function
const openModal = (modal) => {
  modal.classList.add("popup_visible");
};
const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const renderTodo = (item) => {
  const todoElement = generateTodo(item);
  section.addItem(todoElement);
};

// To be removed;
// const todoElement = todoTemplate.content
//   .querySelector(".todo")
//   .cloneNode(true);
// const todoNameEl = todoElement.querySelector(".todo__name");
// const todoCheckboxEl = todoElement.querySelector(".todo__completed");
// const todoLabel = todoElement.querySelector(".todo__label");
// const todoDate = todoElement.querySelector(".todo__date");
// const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

// todoNameEl.textContent = data.name;
// todoCheckboxEl.checked = data.completed;

// // Apply id and for attributes.
// // The id will initially be undefined for new todos.
// todoCheckboxEl.id = `todo-${data.id}`;
// todoLabel.setAttribute("for", `todo-${data.id}`);

// // If a due date has been set, parsing this it with `new Date` will return a
// // number. If so, we display a string version of the due date in the todo.
// const dueDate = new Date(data.date);
// if (!isNaN(dueDate)) {
//   todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   })}`;
// }

// todoDeleteBtn.addEventListener("click", () => {
//   todoElement.remove();
// });

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Object For Timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  renderTodo(values);
  closeModal(addTodoPopup);
});

initialTodos.forEach((item) => {
  renderTodo(item);
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
