// const Circle = require('../lib/circle');

// test('render method returns the SVG string with the correct colour', () => {
//   const circle = new Circle();
//   circle.setColour('red');
//   expect(circle.render()).toEqual('<circle cx="100" cy="100" r="80" fill="red" />');
// });

// test('throw an error if colour is not set', () => {
//   const circle = new Circle();
//   expect(() => {
//     circle.render();
//   }).toThrow();
// });


const Circle = require('./circle');

describe('Circle', () => {
  let circle;

  beforeEach(() => {
    circle = new Circle();
  });

  test('should render a circle with given SVG attributes', () => {
    circle.setColor('blue');
    const svgAttributes = 'stroke="black"';
    const expectedSvg = '<circle cx="0" cy="0" r="80" stroke="black" fill="blue" />';
    expect(circle.render(svgAttributes)).toEqual(expectedSvg);
  });

  test('should throw an error if no colour is selected', () => {
    const svgAttributes = 'stroke="black"';
    expect(() => circle.render(svgAttributes)).toThrowError('Need to have selected a colour first');
  });
});
