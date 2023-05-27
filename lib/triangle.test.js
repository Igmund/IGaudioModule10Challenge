const Triangle = require('../lib/triangle');

test('return correct colour SVG string', () => {
  const triangle = new Triangle();
  triangle.setColour('blue');
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('throw an error if colour is not set', () => {
  const triangle = new Triangle();
  expect(() => {
    triangle.render();
  }).toThrow();
});
