export default class GotService {
  constructor() {
    this._apiBase = 'https://anapioficeandfire.com/api/'
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource('characters?page=5&pageSize=10');
    return res.map((el) => this._transformCharacter(el))
  };

  getCharacters = async (id) => {
    const character = await this.getResource(`characters/${id}`);
    return this._transformCharacter(character)
  };

  getAllBooks = async () => {
    const res = await this.getResource(`books/`);
    return res.map((el) => this._transformBook(el))
  };

  getBooks = async (id) => {
    const book = await this.getResource(`books/${id}`);
    return this._transformBook(book)
  };

  getAllHouses = async () => {
    const res = await this.getResource(`houses/`);
    return res.map((el) => this._transformHouse(el))
  };

  getHouses = async (id) => {
    const house = await this.getResource(`houses/${id}`);
    return this._transformHouse(house)
  };

  _transformCharacter(char) {
    return {
      name: this.isNoData(char.name),
      id: this.uniqueId(char),
      gender: this.isNoData(char.gender),
      born: this.isNoData(char.born),
      died: this.isNoData(char.died),
      culture: this.isNoData(char.culture)
    }
  }

  _transformHouse(house) {
    return {
      name: this.isNoData(house.name),
      id: this.uniqueId(house),
      region: this.isNoData(house.region),
      words: this.isNoData(house.words),
      titles: this.isNoData(house.titles),
      overlord: this.isNoData(house.overlord),
      ancestralWeapons: this.isNoData(house.ancestralWeapons),
      coatOfArms:this.isNoData(house.coatOfArms),
      seats:this.isNoData(house.seats)

    }
  }

  _transformBook(book) {
    return {
      name: this.isNoData(book.name),
      authors: this.isNoData(book.authors),
      id: this.uniqueId(book),
      numberOfPages: this.isNoData(book.numberOfPages),
      publisher: this.isNoData(book.publisher),
      released: this.isNoData(book.released)
    }
  }


  isNoData = (data) => {
    return data ? data : 'No data'
  };

  uniqueId = (item) => {
    const id = /\/([0-9]*)$/;
    return item.url.match(id)[1]
  };


}
