Array.prototype.unique = function() {
  let ret = [];
  let seen = {};
  this.forEach(function(el) {
    if (!seen[el]) {
      ret.push(el);
      seen[el] = true;
    }
  });

  return ret;
};

// a = [1,2,3,1, "hello", 2, "blue" ];
// console.log(a.unique());

Array.prototype.twoSum = function() {
  let ret = [];
  let seen = {};
  for (let i = 0; i < this.length + 1; i++) {
     if (seen[this[i]] === undefined) {
        seen[(0 - this[i])] = i;
     } else {
       ret.push([seen[this[i]], i]);
     }
  }

  return ret;
};

// a = [4,1,3,-2,4,5,2,-1];
// console.log(a.twoSum());

Array.prototype.transpose = function() {
  let ret = [];
  let sub = [];
  for (let i = 0; i < this[0].length; i++) {
    for (let j = 0; j < this.length; j++) {
        sub.push(this[j][i]);
    }
    ret.push(sub);
    sub = [];
  }

  return ret;
};

// a = [[1,2,3], [4,5,6]];
// console.log(a.transpose());

