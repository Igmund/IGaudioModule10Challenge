//Import npm requirements
const inquirer = require('inquirer');
const fetch = require('node-fetch');
const fs = require("fs");

// Prompts to determine logo properties
function promptUser() {
    inquirer
      .prompt([
        // Request logo letters
        {
          type: "input",
          message:
            "Enter your logo (up to three characters)",
          name: "text",
        },
        // Request colours
        {
          type: "input",
          message:
            "Enter your preferred logo colour (hexadecimal code or word eg (255,192,203) or (pink))",
          name: "textColour",
        },
        // Request shape
        {
          type: "list",
          message: "Select your desired shape (use arrow keys)",
          choices: ["Circle", "Triangle", "Square", "Hexagon" ],
          name: "shape",
        },
        // Request background colour
        {
          type: "input",
          message:
            "Enter your preferred background colour (hexadecimal code or word eg (128,128,128) or (grey))",
          name: "shapeBackgroundColor",
        },
      ])}