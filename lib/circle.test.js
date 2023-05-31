
const Circle = require('./circle');

describe('Circle', () => {
  let circle;

  beforeEach(() => {
    circle = new Circle();
  });

  test('should render a circle with given SVG attributes', () => {
    circle.setColour('blue');
    const svgAttributes = 'stroke="black"';
    const expectedSvg = '<circle cx="0" cy="0" r="80" stroke="black"/>';
    expect(circle.render(svgAttributes)).toEqual(expectedSvg);
  });

  test('should throw an error if no colour is selected', () => {
    try {
      circle.render();
      throw new Error('Need to have selected a colour first');
    } catch (error) {
      expect(error.message).toBe('Need to have selected a colour first');
    }
  });
});
