const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateHTML = require('./utils/generateHTML');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUserManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate:(value) => {
        if (value)
        {return true} 
        else {return 'please enter a value'}},
    },
    {
      type: 'confirm',
      name: 'manager',
      message: 'Your position is manager?',
      validate:(value) => {
        if (value)
        {return true} 
        else {return 'please enter a value'}},
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?',
      validate:(value) => {
        if (value)
        {return true} 
        else {return 'please enter a value'}},
    },
    {
      type: 'input',
      name: 'office',
      message: 'what is your office number?',
      validate:(value) => {
        if (value)
        {return true} 
        else {return 'please enter a value'}},
    }
  ]);
};


// Bonus using writeFileAsync as a promise
const init = () => {
  promptUserManager()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();

// const promptUserEngineer1 = () => {
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//         validate:(value) => {
//             if (value)
//             {return true} 
//             else {return 'please enter a value'}},
//       },
//       {
//         type: 'confirm',
//         name: 'manager',
//         message: 'Your position is engineer?',
//         validate:(value) => {
//             if (value)
//             {return true} 
//             else {return 'please enter a value'}},
//       },
//       {
//         type: 'input',
//         name: 'id',
//         message: 'What is your email?',
//         validate:(value) => {
//             if (value)
//             {return true} 
//             else {return 'please enter a value'}},
//       },
//       {
//         type: 'input',
//         name: 'office',
//         message: 'what is your GiT Hub name?',
//         validate:(value) => {
//             if (value)
//             {return true} 
//             else {return 'please enter a value'}},
//       }
//     ]);
//   };

//   const init2 = () => {
//     promptUserEngineer1()
//       .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//       .then(() => console.log('Successfully wrote to index.html'))
//       .catch((err) => console.error(err));
//   };
  
//   init2();