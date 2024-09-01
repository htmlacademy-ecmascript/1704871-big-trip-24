import EditForm from "../view/editing-form.js";
import Filters from "../view/filters.js";
import Sort from "../view/Sort.js";
import Waypoint from "../view/waypoint.js";

import { render, RenderPosition } from "../render.js";

export default class MainPresenter {
  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new EditForm(), this.container, RenderPosition.BEFOREEND);
    render(new Sort(), this.container, RenderPosition.BEFOREEND);
    render(new Filters(), this.container, RenderPosition.BEFOREEND);

    for (let i = 0; i <= 5; i++) {
      render(new Waypoint(), this.container, RenderPosition.BEFOREEND);
    }
  }
}
