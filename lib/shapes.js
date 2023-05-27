class Shapes {
  constructor() {
    this.colour = 'pink';
  }

  setColour(colour) {
    this.colour = colour;
  }

  render() {
    throw new Error('You gotta select more parameters');
  }
}

module.exports = Shapes;
