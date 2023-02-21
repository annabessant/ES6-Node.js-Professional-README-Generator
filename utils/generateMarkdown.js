// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![App License](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is licensed under ${data.license}.

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions about this project contact me directly at ${data.email}.  You can also find my other repos at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
