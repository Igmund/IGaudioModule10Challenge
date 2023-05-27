const Shape = require('../lib/shapes');

test('setColour sets correct colour', () => {
  const shape = new Shape();
  shape.setColour('blue');
  expect(shape.colour).toEqual('blue');
});

test('throw an error if render is called only on shape', () => {
  const shape = new Shape();
  expect(() => {
    shape.render();
  }).toThrow();
});
