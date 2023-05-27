class Shapes {
    constructor() {
      this.colour = pink;
    }
  
    setColor(colour) {
      this.colour = colour;
    }
  
    render() {
      throw new Error('You gotta select more paramaters');
    }
  }
  
  module.exports = Shapes;