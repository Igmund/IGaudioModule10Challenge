//Import npm requirements
const inquirer = require('inquirer');
const fetch = require('node-fetch');
const fs = require("fs");
const { generateSVG } = require("./lib/generateSVG");

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
          choices: ["Circle", "Triangle", "Square"],
          name: "shape",
        },
        // Request background colour
        {
          type: "input",
          message:
            "Enter your preferred background colour (hexadecimal code or word eg (128,128,128) or (gray))",
          name: "backgroundColour",
        },
      ])
      .then((answers) => {
        const { text, textColour, shape, backgroundColour } = answers;
  
        // Creat SVG file based on above prefences
        const svgCode = generateSVG(text, textColour, shape, backgroundColour);
  
        // Save to file
        fs.writeFile("logo.svg", svgCode, (err) => {
          if (err) {
            console.error("Error creating logo.svg:", err);
            return;
          }
  
          console.log("Check out your logo.svg!");
        });
      });
  }
    //   .then((data) => {
    //     const svgPath = "./dist/logo.svg";
    //     const finalLogo = generateShape(data);
    
        //Create logo
    //     fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
    //       err ? console.error(err) : console.log("Generated logo.svg")
    //     );
    //   })}
    //   .catch((err) => console.error(err));

//Run the function
      promptUser();

    