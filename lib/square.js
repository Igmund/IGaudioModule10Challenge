const Shapes = require('./shapes');

class Square extends Shapes {
  setColour(colour) {
    this.colour = colour;
  }

  render(svgAttributes) {
    if (!this.colour) {
      throw new Error('Need to have selected a colour first');
    }

    const x = -90; // Fixed x-coordinate
    const y = -90; // Fixed y-coordinate
    const squareSize = 180; // Square size

    return `<rect x="${x}" y="${y}" width="${squareSize}" height="${squareSize}" ${svgAttributes} />`;
  }
}

module.exports = Square;
