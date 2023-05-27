const Shapes = require('./shapes');

class Triangle extends Shapes {
  render() {
    if (!this.colour) {
      throw new Error('Need to have selected a colour first');
    }

    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`;
  }
}

module.exports = Triangle;
