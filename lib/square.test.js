const Square = require('./square');

describe('Square', () => {
  let square;

  beforeEach(() => {
    square = new Square();
  });

  test('should render a square with given SVG attributes', () => {
    square.setColour('red');
    const svgAttributes = 'stroke="black"';
    const expectedSvg = '<rect x="-90" y="-90" width="180" height="180" stroke="black" />';
    expect(square.render(svgAttributes)).toEqual(expectedSvg);
  });

  test('should throw an error if no colour is selected', () => {
    try {
      square.render();
      throw new Error('Need to have selected a colour first');
    } catch (error) {
      expect(error.message).toBe('Need to have selected a colour first');
    }
  });
});

