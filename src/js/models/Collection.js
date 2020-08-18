export default class Collection {
  constructor() {
    this.pictures = [];
  }

  get getSelectedPictures() {
    return this.pictures.filter((x) => x.selected === true);
  }

  get _getUnselectedPictures() {
    return this.pictures.filter((x) => x.selected === false);
  }

  addPicture(picture) {
    this.pictures.push(picture);
  }

  removePictures() {
    this.pictures = this._getUnselectedPictures;
  }

  toggleSelected(id) {
    const target = this.pictures.find((x) => x.id === id);
    target.selected = !target.selected;
  }
}
