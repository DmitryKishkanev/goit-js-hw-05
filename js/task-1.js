const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const clollback1 = function (value) {
  return value >= 3;
};

const clollback2 = function (value) {
  return value <= 4;
};

const r1 = filter([1, 2, 3, 4, 5], clollback1);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], clollback2);
console.log(r2);

const fruits = [
  { name: "aples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);
