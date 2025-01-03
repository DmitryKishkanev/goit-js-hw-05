function doMath(a, b, callback) {
  const result = callback(a, b);

  console.log(result);
}

doMath(2, 3, function add(x, y) {
  return x + y;
});

doMath(10, 8, function sub(x, y) {
  return x - y;
});
