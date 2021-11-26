export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Персонаж ${character} уже добавлен. Выберите другого.`);
    } else {
      this.members.add(character);
    }
  }

  addAll(...character) {
    character.forEach((elem) => {
      this.members.add(elem);
    });
  }

  * [Symbol.iterator]() {
    const persons = this.toArray();
    let current = 0;
    const last = persons.length;

    while (current < last) {
      yield persons[current];
      current += 1;
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
