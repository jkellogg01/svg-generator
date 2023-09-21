const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const renderSVG = require("./lib/shapes");

const questions = [
  {
    name: "text",
    type: "input",
  },
  {
    name: "color",
    type: "input",
  },
  {
    name: "background",
    type: "input",
  },
  {
    name: "shape",
    type: "list",
    choices: ["Square", "Circle", "Triangle"],
  },
];

async function init(name = "output.svg") {
  const filepath = `./output/${name}`;
  const userData = await inquirer.prompt(questions);
  const result = renderSVG(userData);
  writeFile(filepath, result).then(
    console.log(`file written to ${filepath} successfully`)
  );
}

init(process.argv[2]);
