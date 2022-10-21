// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  if(license==='APM'){
    badge="https://shields.io/badge/license-MIT-green";
  }
  else if(license==='Bower'){
    badge="https://shields.io/badge/license-MIT-green";
  }
  else if(license==='GitHub'){
    badge="https://shields.io/badge/license-MIT-green";
  }
  else if(license==='NPM'){
    badge="https://shields.io/badge/license-MIT-green";
  }
  else if(license==='Reuse'){
    badge="https://shields.io/badge/reuse-compliant-green";
  }
  else{
    badge='';
  }
  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  if(license==='APM'){
    link="/apm/l/:packageName";
  }
  else if(license==='Bower'){
    link="/bower/l/:packageName";
  }
  else if(license==='GitHub'){
    link="/github/license/:user/:repo";
  }
  else if(license==='NPM'){
    link="/npm/l/:packageName";
  }
  else if(license==='Reuse'){
    link="/reuse/compliance/:remote+";
  }
  else{
    link='';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let desc;
  if(license==='APM'){
    desc="apm";
  }
  else if(license==='Bower'){
    desc="bower";
  }
  else if(license==='GitHub'){
    desc="github";
  }
  else if(license==='NPM'){
    desc="npm";
  }
  else if(license==='Reuse'){
    desc="reuse";
  }
  else{
    desc='';
  }
  return desc;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge=renderLicenseBadge(data.license);
  let licenseLink=renderLicenseBadge(data.license);
  let licenseDesc=renderLicenseBadge(data.license);
  return `# ${data.title}\n\n
  ## Table of Contents
  * [Description](#description)
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [GitHub](#github)
  * [Questions](#questions)
  ## Description\n${data.description}\n\n
  ## License\n${data.license} ![](${licenseBadge})\n[License link]( ${licenseLink})\n${licenseDesc}\n\n
  ## Installation\n${data.installation}\n\n
  ## Usage\n${data.usage}\n\n
  ## Contribution\n${data.contribution}\n\n
  ## GitHub\n[To visit my GitHub]( https://github.com/${data.github})\n\n
  ## Questions\nYou can email me if you have any questions [My email:](mailto:${data.email})`
}

module.exports = generateMarkdown;
