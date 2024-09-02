import Filters from '../view/filters.js';
import { render, RenderPosition } from '../render.js';

export default class HeaderPresenter {
  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new Filters(), this.container, RenderPosition.BEFOREEND);
  }
}
