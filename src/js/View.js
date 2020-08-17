export default class View {
  constructor() {
    this.input = this.getElement(".search__input");
    this.searchButton = this.getElement(".search__button");
    this.searchResults = this.getElement(".search__result");
    this.error = this.getElement(".search__error");
    this.myPictures = this.getElement(".my-pictures__collection");
    this.removeButton = this.getElement(".my-pictures__button");
  }

  get _input() {
    return this.input.value;
  }

  clearInput() {
    this.input.value = "";
  }

  clearScreen() {
    this.error.textContent = "";
    this.searchResults.innerHTML = "";
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  bindSearch(handler) {
    this.searchButton.addEventListener("click", (event) => {
      event.preventDefault();

      if (this._input) {
        handler(this._input);
      }
    });
  }

  renderImages(images) {
    images.forEach((image) => {
      const markup = `
      <div class="search__item">
        <img
          src=${image.url}
          alt=""
          class="search__img"
        />
        <h4 class="search__text">${image.id}</h4>
      </div>
      `;
      this.searchResults.insertAdjacentHTML("beforeend", markup);
    });
  }

  renderError(error) {
    this.error.textContent = error;
  }
}
