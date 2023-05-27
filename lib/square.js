const Shapes = require('./shapes');

class Square extends Shapes {
  render() {
    if (!this.colour) {
      throw new Error('Need to have selected a colour first');
    }

    return `<rect x="40" y="40" width="120" height="120" fill="${this.colour}" />`;
  }
}

module.exports = Square;
