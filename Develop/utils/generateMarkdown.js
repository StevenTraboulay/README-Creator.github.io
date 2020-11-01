//license badge function from github
function renderLicenseBadge(license) {
  if ( license!== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
return ''
}

function renderlicenseLink(license) {
  if (license == "None") {
    return (
      `\* [License](#license)\n`
    )
  }
  return ''
}

function renderLicenseSection(license) {
  if (license == "None") {
    return (
      `## License
      This project is licensed under the ${license} license.`
    )
  }
  return ''
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)
${renderlicenseLink(data.license)}
*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)

## Installation

To install needed dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## contributing 

${data.contributing}

## Tests

to run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
