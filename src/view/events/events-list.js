import { createElement } from '../../render.js';
import { createTripEventsList } from '../../templates/creating-trip-events-list.js';


class EventsList {
  getTemplate() {
    return createTripEventsList();
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

export default EventsList;
