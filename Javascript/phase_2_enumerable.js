Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
}

a = [1,2,3];
// a.myEach((ele) => console.log(ele));
// a.myEach((ele) => console.log(ele + 3))

function waterbottle(ele) {
  console.log(ele * 2);
};

// a.myEach(waterbottle);




Array.prototype.myMap = function(callback) {
  let ret = []
  this.myEach((ele) => ret.push(callback(ele)));
  // this.myEach(function(ele) { ret.push(callback(ele))});
  return ret;
};

// console.log(a.myMap((ele) => (ele.toString()+ "waterbottle")));
// console.log(a.map((ele) => (ele.toString() + "waterbottle")));

Array.prototype.myReduce = function(callback, initialValue = this[0]) {
  let ret = initialValue
  this.myEach((ele) => ret = callback(ret, ele));
  return ret;
}

function adder(acc, el) {
  acc += el;
  return acc;
}



function multiplier(acc, el) {
  acc *= el;
  return acc;
}

// console.log(a.myReduce(adder, 300));
// console.log(a.myReduce(multiplier));