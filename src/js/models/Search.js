import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getPictures() {
    try {
      const result = await axios(
        `http://www.splashbase.co/api/v1/images/search?query=${this.query}`
      );
      this.pictures = result.data.images;
    } catch (error) {
      alert(error);
    }
  }
}
