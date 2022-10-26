// packages needed for this application
const inquirer=require('inquirer');
const newReadmeFile = require('fs');
const generateMarkdown=require('./utils/generateMarkdown');

// function to initialize app
function init() {
// array of questions for user input
     inquirer.prompt([
          {
          type: 'input',
          message: 'What is your project title?',
          name: 'title',
          },
          {
               type:'input',
               message:'Type some description for your project:-',
               name:'description',
          },
          {
               type: 'list',
               name: 'license',
               message: 'Select your licence type',
               choices: ['APM','Bower','GitHub','NPM','Reuse','No License']
          },
          {
               type:'input',
               message:'Installation instructions:-',
               name:'installation'
          },
          {
               type:'input',
               message:'Usage information:-',
               name:'usage'
          },
          {
               type:'input',
               message:'Contribution guidelines:-',
               name:'contribution'
          },
          {
               type: 'input',
               message: 'Enter is your github user name:',
               name: 'github',
          },
          {
               type: 'input',
               message: 'Enter is your email address:',
               name: 'email',
          },
     ])

     .then((input) =>
          {
               JSON.stringify(input);
               writeToFile(newReadmeFile, input);
          }
     );
}

// function to write README file
function writeToFile(fileName, data) {
     fileName.writeFile('./utils/README.md', generateMarkdown(data), 
     (err) => err ? console.error(err) : console.log('added to file!')
     );
}

// Function call to initialize app
init();
