const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

const generateShape = (data) => {
  const { shape, colour } = data;
  const svgAttributes = `fill="${colour}"`;
  switch (shape.toLowerCase()) {
    case "circle":
      const generateCircle = new Circle();
      generateCircle.setColour(colour); // Set colour before rendering
      return generateCircle.render(svgAttributes);

    case "triangle":
      const generateTriangle = new Triangle();
      generateTriangle.setColour(colour); // Set colour before rendering
      return generateTriangle.render(svgAttributes);

    case "square":
      const generateSquare = new Square();
      generateSquare.setColour(colour); // Set colour before rendering
      return generateSquare.render(svgAttributes);

    default:
      throw new Error(`Invalid shape: ${shape}`);
  }
};

module.exports = generateShape;
