const Circle = require('../lib/circle');

test('render method returns the SVG string with the correct colour', () => {
  const circle = new Circle();
  circle.setColor('red');
  expect(circle.render()).toEqual('<circle cx="100" cy="100" r="80" fill="red" />');
});

test('throw an error if colour is not set', () => {
  const circle = new Circle();
  expect(() => {
    circle.render();
  }).toThrow();
});
