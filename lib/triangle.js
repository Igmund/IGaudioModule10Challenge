const Shapes = require('./shapes');

class Triangle extends Shapes {
  render(svgAttributes) {
    if (!this.colour) {
      throw new Error('Need to have selected a colour first');
    }

    const points = '-120,86 120,86 0,-86'; // Constant points for the triangle

    return `<polygon points="${points}" ${svgAttributes} />`;
  }
}

module.exports = Triangle;
