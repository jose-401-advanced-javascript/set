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

  union(set) {
    const newSet = new Set();
    for(let i = 0; i < this.array.length; i++) {
      newSet.add(this.array[i]);
    }
    for(let j = 0; j < set.array.length; j++) {
      newSet.add(set.array[j]);
    }
    return newSet;
  }

  difference(set) {
    const newSet = new Set();
    for(let i = 0; i < this.array.length; i++) {
      if(!set.array.includes(this.array[i]))
        newSet.add(this.array[i]);
    }
    for(let j = 0; j < set.array.length; j++) {
      if(!this.array.includes(set.array[j]))
        newSet.add(set.array[j]);
    }
    return newSet;
  }

  static intersection(set1, set2) {
    const newSet = new Set();
    for(let i = 0; i < set2.array.length; i++) {
      if(set1.array.includes(set2.array[i])) newSet.add(set2.array[i]);
    }
    return newSet;
  }

  static union(set1, set2) {
    const newSet = new Set();
    for(let i = 0; i < set1.array.length; i++) {
      newSet.add(set1.array[i]);
    }
    for(let j = 0; j < set2.array.length; j++) {
      newSet.add(set2.array[j]);
    }
    return newSet;
  }

}

module.exports = { Set };