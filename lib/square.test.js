// const Square = require('./square');

// test('return correct colour SVG string', () => {
//   const square = new Square();
//   square.setColour('yellow');
//   expect(square.render()).toEqual('<rect x="40" y="40" width="120" height="120" fill="green" />');
// });

// test('throw an error if colour is not set', () => {
//   const square = new Square();
//   expect(() => {
//     square.render();
//   }).toThrow();
// });


// const Square = require('./square');

// describe('Square', () => {
//   let square;

//   beforeEach(() => {
//     square = new Square();
//   });

//   test('should render a square with given SVG attributes', () => {
//     square.setColour('red');
//     const svgAttributes = 'stroke="black"';
//     const expectedSvg = '<rect x="-90" y="-90" width="180" height="180" stroke="black"" />';
//     expect(square.render(svgAttributes)).toEqual(expectedSvg);
//   });

//   test('should throw an error if no colour is selected', () => {
//     const svgAttributes = 'stroke="black"';
//     expect(() => square.render(svgAttributes)).toThrowError('Need to have selected a colour first');
//   });
// });

const Square = require('./square');

describe('Square', () => {
  let square;

  beforeEach(() => {
    square = new Square();
  });

  test('should render a square with given SVG attributes', () => {
    square.setColour('red');
    const svgAttributes = 'stroke="black"';
    const expectedSvg = '<rect x="-90" y="-90" width="180" height="180" stroke="black" fill="red" />';
    expect(square.render(svgAttributes)).toEqual(expectedSvg);
  });

  test('should throw an error if no colour is selected', () => {
    const svgAttributes = 'stroke="black"';
    expect(() => square.render(svgAttributes)).toThrowError('Need to have selected a colour first');
  });
});

