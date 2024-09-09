import { createElement } from '../../render.js';

import { createEditEvent } from '../../templates/editing-event.js';

class EditEventForm {
  getTemplate() {
    return createEditEvent();
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

export default EditEventForm;
