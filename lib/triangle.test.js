const Triangle = require('./triangle');

describe('Triangle', () => {
  let triangle;

  beforeEach(() => {
    triangle = new Triangle();
  });

  test('should render a triangle with given SVG attributes', () => {
    triangle.setColor('blue');
    const expectedSvg = '<polygon points="-120,86 120,86 0,-86" fill="blue" />';
    expect(triangle.render()).toEqual(expectedSvg);
  });

  test('should throw an error if no colour is selected', () => {
    expect(() => triangle.render()).toThrowError('Need to have selected a colour first');
  });
});
