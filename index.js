// TODO: Include packages needed for this application
const inquirer=require('inquirer');
const newReadmeFile = require('fs');


// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
     {
       type: 'input',
       message: 'What is your name?',
       name: 'userName',
     },
     {
          type:'input',
          message:'What languages do you know?',
          name:'language',
     },
     {
          type:'input',
          message:'What is your preferred method of communication?',
          name:'preferred'
     }
])

.then((input) =>
     {
          JSON.stringify(input);
          writeToFile(newReadmeFile, input);
     }
);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fileName.appendFile('README.md', `${data.userName}\n${data.language}\n${data.preferred}\n`, 
     (err) => err ? console.error(err) : console.log('added to file!')
     );
     }


// // TODO: Create a function to initialize app
// function init() {

// }

// // Function call to initialize app
// init();
