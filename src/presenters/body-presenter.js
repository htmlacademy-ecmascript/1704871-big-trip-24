import {render} from '../render.js';
import { EVENTS_COUNT } from '../constants/constants.js';
import Sort from '../view/sort/sort.js';
import EventsItem from '../view/events/events-item.js';
import EventsList from '../view/events/events-list.js';
import EditEvent from '../view/form/edit-event.js';
import AddEventForm from '../view/form/add-event.js';

export default class BodyPresenter {
  eventsListComponent = new EventsList();
  constructor(container, eventsModel) {
    this.container = container;
    this.tripEventsModel = eventsModel;
  }

  init() {
    this.events = [...this.tripEventsModel.getEvents()];
    render(new Sort(), this.container);
    render(this.eventsListComponent, this.container);
    render(new AddEventForm(), this.eventsListComponent.getElement());
    render(new EditEvent(), this.eventsListComponent.getElement());
    for (let i = 0; i < EVENTS_COUNT; i++) {
      render(new EventsItem(this.events[i]), this.eventsListComponent.getElement());
    }
  }
}
