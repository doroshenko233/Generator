export default class Team {
  constructor() {
      this.members = new Set();
  }

  add(...heros) {
      heros.forEach(hero => this.members.add(hero));
  }

  get() {
      return Array.from(this.members);
  }

  * [Symbol.iterator]() {
      for (const hero of this.members) {
        yield hero;
        console.log(hero)
      }
    }
}