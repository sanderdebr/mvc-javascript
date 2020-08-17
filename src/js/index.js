import Search from "./models/Search";
import Selection from "./models/Selection";
import * as searchView from "./views/searchView";
import { elements, renderSpinner, clearSpinner } from "./views/base";

/*
 ** Global state of the app
 */
const state = {};

/*
 ** Startup on page load
 */

window.addEventListener("load", () => {
  state.selection = new Selection();
  state.selection.pictures.forEach((picture) =>
    selectionView.renderPicture(picture)
  );
});

/*
 ** Search controller
 */

const searchController = async () => {
  const query = searchView.getInput();

  if (query) {
    state.search = new Search(query);
    searchView.clearInput();
    searchView.clearResults();
    renderSpinner(elements.searchResults);

    try {
      await state.search.getPictures();
      clearSpinner();

      if (state.search.pictures.length) {
        searchView.renderPictures(state.search.pictures);
      } else {
        searchView.renderNoResults("No pictures found.");
      }
    } catch (err) {
      alert(`Something went wrong: ${err}`);
    }
  }
};

elements.searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchController();
});

/*
 ** Picture select controller
 */

const selectionController = () => {};

elements.searchResults.addEventListener("click", (event) => {
  if (event.target.dataset.id) {
    selectionController();
  }
});
