class Set {
  constructor() {
    this.array = [];
  }

  add(value) {
    !this.array.includes(value) ? this.array.push(value) : console.log('Value is already in set');
  }

  remove(value) {
    if(this.array.includes(value)) {
      const i = this.array.indexOf(value);
      this.array.splice(i, 1);
    }
  }

  has(value) {
    return this.array.includes(value);
  }
}

module.exports = { Set };