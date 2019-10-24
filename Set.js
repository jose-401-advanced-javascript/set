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

  intersection(set) {
    const newSet = new Set();
    for(let i = 0; i < this.array.length; i++) {
      if(set.array.includes(this.array[i])) newSet.add(this.array[i]);
    }
    return newSet;
  }
}

module.exports = { Set };