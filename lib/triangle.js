const Shapes = require('./shapes');

class Triangle extends Shapes {
  render(svgAttributes) {
    if (!this.colour) {
      throw new Error('Need to have selected a colour first');
    }

    const base = Math.min(240, 200); // Triangle max length base
    const height = (base * Math.sqrt(3)) / 2; // Triangle height

    const x1 = -base / 2; // Point one x-coordinate
    const x2 = base / 2; // Point two x-coordinate
    const x3 = 0; // Point three x-coordinate

    const y1 = height / 2; // Point one y-coordinate
    const y2 = height / 2; // Point two y-coordinate
    const y3 = -height / 2; // Point three y-coordinate

    const points = `${x1},${y1} ${x2},${y2} ${x3},${y3}`; // Build the triangle!

    return `<polygon points="${points}" ${svgAttributes} />`;
  }
}

module.exports = Triangle;
