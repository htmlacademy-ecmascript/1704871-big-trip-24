import { createElement } from '../../render.js';
import { createTripEventsItem } from '../../templates/creating-trip-events-item.js';

class EventsItem {
  constructor(event) {
    this.event = event;
  }

  getTemplate() {
    return createTripEventsItem(this.event);
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

export default EventsItem;
