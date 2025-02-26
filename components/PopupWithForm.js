import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector }); //calls the constructor parent class and we pass with an argument with a single property
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners(); //The way we call the parent method
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();

      //TODO - Pass result of _getInputValues to submissions handler
      this._handleFormSubmit(inputValues);

      this.close(); // Close popup after submission
      this._popupForm.reset(); // Clear the form fields
    });
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }
}
export default PopupWithForm;
