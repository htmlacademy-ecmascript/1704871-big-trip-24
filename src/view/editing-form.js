import { createEditPointTemplate } from "../templates/edit-point-template.js";
import { createElement } from "../render.js";

export default class EditForm {
  getTemplate() {
    return createEditPointTemplate()
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
