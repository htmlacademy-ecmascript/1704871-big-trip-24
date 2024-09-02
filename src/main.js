import BodyPresenter from './presenter/body-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';

const tripControls = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const bodyPresenter = new BodyPresenter({container: tripEventsElement});
const headerPresenter = new HeaderPresenter({container: tripControls});

headerPresenter.init();
bodyPresenter.init();
