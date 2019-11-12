export default class GotService {
  constructor() {
    this._apiBase = 'https://anapioficeandfire.com/api'
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllCharacters() {
    const res = await this.getResource('/characters?page=5&pageSize=10');
    return res.map(this._transformCharacter())
  }

  async getCharacters(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character)
  }

  async getAllBooks() {
      const res = await this.getResource(`books?page=5&pageSize=10`);
      return res.map(this._transformBook())
  }

  async getBooks(id) {
      const book = await this.getResource(`books/${id}`)
      return this._transformBook(book)
  }

  async getAllHouses() {
      const res = await this.getResource(`houses?page=5&pageSize=10`)
      return res.map(this._transformHouse())
  }

  async getHouses(id) {
      const house = await this.getResource(`houses/${id}`)
      return this._transformHouse(house)
  }

  _transformCharacter(char) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture
    }
  }

  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons

    }
  }

  _transformBook(book) {
    return {
      name: book.name,
      numberOfPages: book.number,
      publiser: book.publiser,
      released: book.released
    }
  }
}
