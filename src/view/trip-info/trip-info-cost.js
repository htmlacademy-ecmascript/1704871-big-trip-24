import { createElement } from '../../render.js';
import { createTripInfoCost } from '../../templates/creating-trip-info-cost.js';

class TripInfoCost {
  constructor(event) {
    this.event = event;
  }

  getTemplate() {
    return createTripInfoCost(this.event);
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

export default TripInfoCost;
