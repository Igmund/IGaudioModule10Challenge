const Shapes = require('./shapes');

class Circle extends Shapes {
  render() {
    if (!this.colour) {
      throw new Error('Need to have selected a colour first');
    }

    return `<circle cx="100" cy="100" r="80" fill="${this.colour}" />`;
  }
}

module.exports = Circle;

