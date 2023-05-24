function generateSVG(text, textColour, shape, backgroundColour) {
    // Dimensions of logo
    const width = 300;
    const height = 200;
  
    // Generate shape and 
    const shapeCode = generateShape(shape, backgroundColour);
  
    // Generate the SVG code
    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <rect width="${width}" height="${height}" fill="${backgroundColour}" />
        <g transform="translate(${width / 2} ${height / 2})">
          ${shapeCode}
          <text x="0" y="0" dominant-baseline="middle" text-anchor="middle" fill="${textColour}" font-size="60">${text}</text>
        </g>
      </svg>
    `;
  
    return svgCode;
  }
  
  module.exports = { generateSVG };