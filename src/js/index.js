import Search from "./models/Search";
import Picture from "./models/Picture";
import Collection from "./models/Collection";
import * as searchView from "./views/searchView";
import * as collectionView from "./views/collectionView";
import { elements, renderSpinner, clearSpinner } from "./views/base";

/*
 ** Global state of the app
 */
const state = {};

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
 ** Picture collection controller
 */

const collectionController = () => {
  collectionView.clearCollection();
  collectionView.renderPictures(state.collection.pictures);

  if (state.collection.getSelectedPictures.length) {
    collectionView.enableButton();
  } else {
    collectionView.disableButton();
  }
};

// Add picture to collection
elements.searchResults.addEventListener("click", (event) => {
  let target;
  if (!event.target.classList.contains("search__item")) {
    target = event.target.parentElement;
  } else {
    target = event.target;
  }

  const id = parseInt(target.dataset.id);
  const alreadySelected = state.collection.pictures.find((x) => x.id === id);

  if (!alreadySelected && id) {
    const { url } = state.search.pictures.find((x) => x.id === id);
    state.collection.addPicture(new Picture(id, url));

    collectionController();
  }
});

// Select picture for removal
elements.myPictures.addEventListener("click", (event) => {
  let target;
  if (!event.target.classList.contains("search__item")) {
    target = event.target.parentElement;
  } else {
    target = event.target;
  }

  const id = parseInt(target.dataset.id);

  if (id) {
    const picture = state.collection.pictures.find((x) => x.id === id);
    state.collection.toggleSelected(picture.id);

    collectionController();
  }
});

// Remove selected pictures
elements.removeButton.addEventListener("click", () => {
  if (state.collection.pictures.length) {
    state.collection.removePictures();
    collectionController();
  }
});

/*
 ** Startup on page load
 */

window.addEventListener("load", () => {
  state.collection = new Collection();
  state.collection.pictures.forEach((picture) =>
    collectionView.renderPicture(picture)
  );

  collectionController();
});
