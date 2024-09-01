import MainPresenter from "./presenter/body-presenter.js";


const siteHeaderElement = document.querySelector('.page-header');
const siteTripControlsElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-main');
const tripEventsElement = siteMainElement.querySelector('.trip-events');

const mainPresenter = new MainPresenter({container: tripEventsElement});

mainPresenter.init();

