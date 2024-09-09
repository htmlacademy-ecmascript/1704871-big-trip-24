import { createElement } from '../../render.js';

import { createSortTemplate } from '../../templates/sort.js';

class Sort {
  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

export default Sort;

