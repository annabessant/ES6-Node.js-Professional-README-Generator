// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

`;
}

module.exports = generateMarkdown;
