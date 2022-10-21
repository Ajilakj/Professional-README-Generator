// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [GitHub](#github)
  * [Questions](#questions)
  ## Description\n${data.description}\n\n
  ## Installation\n${data.installation}\n\n
  ## Usage\n${data.usage}\n\n
  ## Contribution\n${data.contribution}\n\n
  ## GitHub\n[To visit my GitHub]( https://github.com/${data.github})\n\n
  ## Questions\nYou can email me if you have any questions [My email:](mailto:${data.email})`
}

module.exports = generateMarkdown;
