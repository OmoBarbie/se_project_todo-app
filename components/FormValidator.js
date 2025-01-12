import { validationConfig } from "../utils/constants";

class FormValidator {
  constructor(settings, formEl) {
    this._settings = settings;
    this._formEl = formEl;

    console.log(settings);
    console.log(formEl);
  }
}

export default FormValidator;
