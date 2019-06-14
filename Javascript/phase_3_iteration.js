Array.prototype.bubbleSort = function() {
  let sorted = false;
  let dup = this.slice;

  while (!sorted) {
    sorted = true;
    for (let i = 1; i < this.length; i++) {
      if (this[i] < this[i - 1]) {
        // let temp = this[i];
        // this[i] = this[i - 1];
        // this[i - 1] = temp;
        [this[i], this[i - 1]] = [this[i - 1], this[i]];
        sorted = false;
      }
    }
  }

  return this;
}

// a = [4,8,2,0,6,3,1,7];
// console.log(a.bubbleSort());


String.prototype.substrings = function() {
  let ret = []
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      let sub = this.slice(i, j);
      ret.push(sub);
    }
  }
  return ret;
};

// b = "this is a string";
// console.log(b.substrings());

