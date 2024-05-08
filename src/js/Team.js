export default class Team {
  constructor() {
      this.members = new Set();
  }

  add(...heros) {
      this.members = new Set([...this.members, ...heros]);
  }

  get() {
      return Array.from(this.members);
  }

  * [Symbol.iterator]() {
      yield* this.get();
  }

}