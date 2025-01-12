class Todo {
  constructor(data, selector) {
    console.log(data);
    console.log(selector);
    this._data = data;
    this._templateElement = document.querySelector("selector");
  }

  getView() {
    const todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = todoElement.querySelector(".todo__name");
    const todoCheckboxEl = todoElement.querySelector(".todo__completed");
    const todoLabel = todoElement.querySelector(".todo__label");
    const todoDate = todoElement.querySelector(".todo__date");
    const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");
    // console.log(`Name: ${this.name}`);
    // console.log(`Name: ${this.name}`);
  }
}

export default Todo;
