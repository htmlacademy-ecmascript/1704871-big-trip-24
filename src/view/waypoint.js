import { createWaypointTemplate } from '../templates/waypoint.js';
import { createElement } from '../render.js';

export default class Waypoint {
  getTemplate() {
    return createWaypointTemplate();
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
