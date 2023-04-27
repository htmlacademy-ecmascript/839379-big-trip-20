import {render, RenderPosition} from '../render.js';
import PointView from '../view/trip-point-view.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
// import NewTripFormView from '../view/new-trip-form-view.js';
import EditTripFormView from '../view/edit-trip-form-view.js';


export default class Presenter {

  listComponent = new TripListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new SortView(), this.boardContainer);
    render(this.listComponent, this.boardContainer);
    render (new EditTripFormView(), this.listComponent.getElement(), RenderPosition.AFTERBEGIN);
    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.listComponent.getElement());
    }
  }
}
