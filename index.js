const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require("fs");
const notEmpy = require('./library/ValidateNotEmpty');
const setShape = require("./library/generateSVG");

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


console.log('Welcome to florezf90 SVG logo Generator!!! this App aims to create a basic logo for your personal brand')


const questions = [
{
    type: 'maxlength-input',
    name: 'text',
    message: 'Enter your Brand Initials',
    maxLength: 3,
    validate: notEmpy,
}, 
{
type: 'input',
name: 'textColor',
message: 'please select a color for the initals (enter a color keyword OR a hexadecimal number)',
validate: notEmpy,

},
{
    type: 'list',
    name: 'Shapes',
    message: 'please select a shape for your logo',
    choices: ['circle', 'triangle', 'square'],
    validate: notEmpy,

},
{
  type: 'input',
  name: 'shapeColor',
  message: 'Now, choose the shape color',
  validate: notEmpy,

}
]

function writeTofile(response) {
  const filename = `./examples/logo.svg`
  const svg = setShape(response);

  fs.writeFile(filename, svg, (err) => err ? console.log(err) : console.log("perfect, your logo has been generated"))
  
}

function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    writeTofile(answers)
  });
}

init ();