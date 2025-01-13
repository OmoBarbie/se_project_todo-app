# Simple Todo App

- Give a brief description of the project here. Feel free to give it a different name.
- Updated the file structure. Createed a new folder called components containing two files: Todo.js and FormValidator.js.
- Exported and imported files, moved data and configuration objects to constants.js. Allowing properties be pulled and assigning variables.
- Also, create a folder called utils that contains one file: constants.js.
- In index.html, update the <script> tag for index.js to support JavaScript modules.
- Deleted its defer attribute and add an appropriate type attribute.
- Created and set up event listeners method with underscore since it did not need to be called for the checkbox, using the true/false method and also the delete button.
- Added new ID to new todo items by importing code uuidv4.
- Created a new class and constructor for FormValidator wich accepted two parameters. It composes of a public method enableValidation(), which enables form validation.

## Functionality

Give a more detailed explanation of the project and its functionality.

Data: an object containing the data for an individual to-do item. You can see the shape of this data by referring to the initialTodos array.
selector: a selector string for the corresponding <template> element.
Generated the todo function in the new class - first step was to get the class to render the items, returning the finished todo elements.
Todo list can be check and unchecked ringing true or false, can also be deleted.
Form validotor in place for date.

## Technology

Create the Todo class. This creates a to-do item with a name (and optionally, a due date) along with the appropriate handlers.

## Deployment

This project is deployed on GitHub Pages:

-
