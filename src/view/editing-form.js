import { createEditPointTemplate } from "../templates/edit-point-template";
import { createElement } from "../render.js";

export default class TimeFilter {
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
