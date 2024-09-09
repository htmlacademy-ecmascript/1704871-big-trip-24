import { createElement } from '../../render.js';

import { createTimeFilterTemplate } from '../../templates/time-filter.js';

class Filters {
  getTemplate() {
    return createTimeFilterTemplate();
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

export default Filters;
