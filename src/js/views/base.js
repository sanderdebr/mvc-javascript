export const elements = {
  searchInput: document.querySelector(".search__input"),
  searchButton: document.querySelector(".search__button"),
  searchResults: document.querySelector(".search__result"),
  error: document.querySelector(".search__error"),
  myPictures: document.querySelector(".my-pictures__collection"),
  removeButton: document.querySelector(".my-pictures__button"),
};

export const renderSpinner = (element) => {
  const spinner = `<div class="spinner"></div>`;
  element.insertAdjacentHTML("afterbegin", spinner);
};

export const clearSpinner = () => {
  const spinner = document.querySelector(".spinner");
  if (spinner) spinner.parentElement.removeChild(spinner);
};
