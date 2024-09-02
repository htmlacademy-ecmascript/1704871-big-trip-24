import EditForm from '../view/editing-form.js';
import Sort from '../view/sort.js';
import Waypoint from '../view/waypoint.js';
import {render, RenderPosition} from '../render.js';

export default class BodyPresenter {
  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new Sort(), this.container, RenderPosition.BEFOREEND);
    render(new EditForm(), this.container, RenderPosition.BEFOREEND);

    for (let i = 0; i < 5; i++) {
      render(new Waypoint(), this.container, RenderPosition.BEFOREEND);
    }
  }
}
