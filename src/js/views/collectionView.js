import { elements } from "./base";

export const clearCollection = () => (elements.myPictures.innerHTML = "");

export const toggleSelected = (picture) => picture.classList.toggle("selected");

export const enableButton = () =>
  (elements.removeButton.classList = "my-pictures__button");

export const disableButton = () => {
  elements.removeButton.classList = "my-pictures__button disabled";
};

const renderPicture = (picture) => {
  const markup = `
      <div class="search__item ${picture.selected ? "selected" : ""}" data-id=${
    picture.id
  }>
        <img
          src=${picture.url}
          alt=""
          class="search__img"
        />
        <h4 class="search__text">${picture.id}</h4>
      </div>
      `;
  elements.myPictures.insertAdjacentHTML("beforeend", markup);
};

export const renderPictures = (pictures) => {
  pictures.forEach((picture) => renderPicture(picture));
};
