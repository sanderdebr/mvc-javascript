import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
    this.pictures = [];
  }

  async getPictures() {
    try {
      const result = await axios(
        `https://www.splashbase.co/api/v1/images/search?query=${this.query}`
      );
      this.pictures = result.data.images;
    } catch (error) {
      alert(error);
    }
  }
}
