const generateShape = require("./generateShape");

function generateSVG(text, textColour, shape, shapeColour) {
  // Dimensions of logo
  const width = 300;
  const height = 200;

  // Generate the SVG code
  const shapeCode = generateShape(
    {
      shape: shape,
      colour: shapeColour,
    },
    width,
    height
  );

  const svgCode = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <g transform="translate(${width / 2} ${height / 2})">
        ${shapeCode}
        <text x="0" y="0" dominant-baseline="middle" text-anchor="middle" fill="${textColour}" font-size="80" style="font-family: Papyrus;">${text}</text>
      </g>
    </svg>
  `;

  return svgCode;
}

module.exports = generateSVG;

