import {render, RenderPosition} from './render.js';
import FiltersView from './view/filters-view.js';
import TripInfoView from './view/trip-info-view.js';
import Presenter from './presenter/presenter.js';


const tripMainElement = document.querySelector('.trip-main');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const presenter = new Presenter({boardContainer: tripEventsElement});

render (new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FiltersView(), tripFiltersElement);


presenter.init();
