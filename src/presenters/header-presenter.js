import Filters from '../view/filter/filters.js';
import TripInfo from '../view/trip-info/trip-info.js';
import TripInfoMain from '../view/trip-info/trip-info-main.js';
import TripInfoCost from '../view/trip-info/trip-info-cost.js';
import { render } from '../render.js';

export default class HeaderPresenter {
  TripInfoViewComponent = new TripInfo();

  constructor(tripInfoContainer, filtersContainer, tripEventsModel) {
    this.tripInfoContainer = tripInfoContainer;
    this.filtersContainer = filtersContainer;
    this.tripEventsModel = tripEventsModel;
  }

  init() {
    this.events = [...this.tripEventsModel.getEvents()];

    render(new TripInfoMain(this.events), this.TripInfoViewComponent.getElement());
    render(new TripInfoCost(), this.TripInfoViewComponent.getElement());

    render(this.TripInfoViewComponent, this.tripInfoContainer, 'AFTERBEGIN');

    // отрисовка фильтров
    render(new Filters(), this.filtersContainer);
  }
}
