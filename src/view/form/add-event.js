import { createElement } from '../../render.js';

import { createAddEventForm } from './../../templates/uploading-event.js';

class AddEventForm {
  getTemplate() {
    return createAddEventForm();
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

export default AddEventForm;
