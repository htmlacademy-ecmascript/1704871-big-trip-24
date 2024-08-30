import { createTimeFilterTemplate } from "../templates/time-filter-template.js";
import { createElement } from "../render.js";

export default class Filters {
  getTemplate() {
    return createTimeFilterTemplate()
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

