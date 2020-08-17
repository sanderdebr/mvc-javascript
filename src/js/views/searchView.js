import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => (elements.searchInput.value = "");

export const clearResults = () => (elements.searchResults.innerHTML = "");

const renderPicture = (picture) => {
  const markup = `
      <div class="search__item" data-id=${picture.id}>
        <img
          src=${picture.url}
          alt=""
          class="search__img"
        />
        <h4 class="search__text">${picture.id}</h4>
      </div>
      `;
  elements.searchResults.insertAdjacentHTML("beforeend", markup);
};

export const renderPictures = (pictures) => {
  pictures.forEach((picture) => renderPicture(picture));
};

export const renderNoResults = (msg) => {
  elements.searchResults.innerHTML = msg;
};
