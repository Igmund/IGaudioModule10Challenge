class Shapes {
    constructor() {
      this.colour = pink;
    }
  
    setColour(colour) {
      this.colour = colour;
    }
  
    render() {
      throw new Error('You gotta select more paramaters');
    }
  }
  
  module.exports = Shapes;