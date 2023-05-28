// Import npm requirements
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG');

// Prompts to determine logo properties
function promptUser() {
  inquirer
    .prompt([
      // Request logo letters
      {
        type: 'input',
        message: 'Enter your logo (up to three characters)',
        name: 'text',
      },
      // Request colours
      {
        type: 'input',
        message:
          'Enter your preferred logo colour (hexadecimal code or word eg (255,192,203) or (pink))',
        name: 'textColour',
      },
      // Request shape
      {
        type: 'list',
        message: 'Select your desired shape (use arrow keys)',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape',
      },
      // Request shape colour
      {
        type: 'input',
        message:
          'Enter your preferred shape colour (hexadecimal code or word eg (128,128,128) or (gray))',
        name: 'shapeColour',
      },
    ])
    .then((data) => {
      const { text, textColour, shape, shapeColour } = data;
      const svgCode = generateSVG(text, textColour, shape, shapeColour);
      // Save to file
      fs.writeFile('logo.svg', svgCode, (err) => {
        if (err) {
          console.error('Error creating logo.svg:', err);
          return;
        }
        console.log('Generated logo.svg');
      });
    });
}

// Run the function
promptUser();
