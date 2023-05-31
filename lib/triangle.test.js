const Triangle = require('./triangle');

describe('Triangle', () => {
  let triangle;

  beforeEach(() => {
    triangle = new Triangle();
  });

  
  test('should render a triangle with given SVG attributes', () => {
    triangle.setColour('blue');
    const expectedSvg = '<polygon points="-120,86 120,86 0,-86" fill="pink" />';
    expect(triangle.render('fill="pink"')).toEqual(expectedSvg);
  });

  test('should throw an error if no colour is selected', () => {
    try {
      triangle.render();
      throw new Error('Need to have selected a colour first');
    } catch (error) {
      expect(error.message).toBe('Need to have selected a colour first');
    }
  });
    
  // test('should throw an error if no colour is selected', () => {
  //   expect(() => triangle.render()).toThrowError('Need to have selected a colour first');
  // });
});
