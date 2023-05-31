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
          'Enter your preferred logo colour (hexadecimal code or word e.g., #FFC0CB or pink)',
        name: 'textColour',
        validate: validateColourInput, // Validate color input
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
          'Enter your preferred shape colour (hexadecimal code or word e.g., #0000FF or blue)',
        name: 'shapeColour',
        validate: validateColourInput, // Validate colour input
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
    })
    .catch((error) => {
      console.error('Error:', error.message);
      promptUser(); // Prompt the user again to enter the missing or invalid input
    });
}

// Colour input validation function
function validateColourInput(input) {
  // Expression to match valid hexadecimal colours (#ABC, #ABCDEF, #123456)
  const hexColourRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
  // Array of valid colour words
  const validColourWords = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'brown', 'black', 'white', 'gray', 'silver', 'gold', 'navy', 'teal', 'olive', 'maroon', 'aqua', 'coral', 'indigo', 'lavender', 'mint', 'peach', 'ruby', 'turquoise', 'violet', 'amber', 'charcoal', 'emerald', 'fuchsia'];
 

  if (input.trim() === '') {
    throw new Error('Please enter a colour (hexadecimal code or word).'); // Empty colour input
  } else if (input.match(hexColourRegex) || validColourWords.includes(input.toLowerCase())) {
    return true; // Valid colour input
  } else {
    throw new Error('Please enter a valid colour (hexadecimal code or word).'); // Invalid colour input
  }
}

// Run the function
promptUser();
