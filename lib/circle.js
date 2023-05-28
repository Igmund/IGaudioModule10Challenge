const Shapes = require('./shapes');

class Circle extends Shapes {
  render(svgAttributes) {
    if (!this.colour) {
      throw new Error('Need to have selected a colour first');
    }

    const cx = 0; // x-co-ord of circle's center
    const cy = 0; // y-co-ord of circle's center
    const radius = 80; // radius of circle

    return `<circle cx="${cx}" cy="${cy}" r="${radius}" ${svgAttributes} />`;
  }
}

module.exports = Circle;
