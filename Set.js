class Set {
  constructor() {
    this.array = [];
  }

  add(value) {
    !this.array.includes(value) ? this.array.push(value) : console.log('Value is already in set');
  }
}

module.exports = { Set };