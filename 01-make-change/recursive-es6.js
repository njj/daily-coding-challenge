// Run with node 8 or above
// node recursive-es6.js
const change = (amount, [coin, ...coins] = [25, 10, 5, 1]) => {
  if (amount === 0) return [];

  const num = Math.floor(amount / coin);
  return [num, ...change(amount - num * coin, coins)];
};

module.exports = change;
