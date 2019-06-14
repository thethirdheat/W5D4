function range(start, end) {
  if (start === end) {
    return [end];
  }
  return [start].concat(range((start + 1), end));
}

console.log(range(20, 30));