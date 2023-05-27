const Square = require('../lib/square');

test('return correct colour SVG string', () => {
  const square = new Square();
  square.setColor('yellow');
  expect(square.render()).toEqual('<rect x="40" y="40" width="120" height="120" fill="green" />');
});

test('throw an error if colour is not set', () => {
  const square = new Square();
  expect(() => {
    square.render();
  }).toThrow();
});
