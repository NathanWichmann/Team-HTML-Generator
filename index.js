const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateHTML = require('./utils/generateHTML');
const Manager = require('./library/Manager')
const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')
const buildTemp = require('./library/buildTemp')

const team = [];
// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);


const continueBuild = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'teamMember',
      message: 'what team member do you want to build',
      choices: ['Intern', 'Engineer', 'I dont not want to add more team members'],
      validate:(value) => {
        if (value)
        {return true} 
        else {return 'please enter a value'}},
    }
  ])
  .then((answer) => {
    switch(answer.teamMember){
      case 'Intern':
        promptIntern();
        break;
      case 'Engineer':
        promptEngineer();
      break;
      default:
        generateTeam();
    }
  })
}


const promptUserManager = () => {
   inquirer.prompt([
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
      type: 'input',
      name: 'email',
      message: 'what is your email?',
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
  ]).then((response) => {

    const manager = new Manager(response.name, response.email, response.id, response.office)
    team.push(manager);

    continueBuild()
  })
};


// Bonus using writeFileAsync as a promise
const init = () => {
  promptUserManager()
    // .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    // .then(() => console.log('Successfully wrote to index.html'))
    // .catch((err) => console.error(err));
};



const promptEngineer = () => {
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
        type: 'input',
        name: 'manager',
        message: 'What is your Id?',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
      },
      {
        type: 'input',
        name: 'github',
        message: 'what is your Git Hub username?',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
      }
    ])
    .then((response) => {

      const engineer = new Engineer(response.name, response.email, response.id, response.github)
      team.push(engineer);
  
      continueBuild()
    })
  };

  const promptIntern = () => {
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
        type: 'input',
        name: 'manager',
        message: 'What is your Id?',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
      },
      {
        type: 'input',
        name: 'school',
        message: 'what is your School name?',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
      }
    ])
    .then((response) => {

      const intern = new Intern(response.name, response.email, response.id, response.school)
      team.push(intern);
  
      continueBuild()
    })
  };
 
//   const init = () => {
//   promptUser()
//     .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };


function generateTeam() {
   fs.writeFileAsync('index.html', generateHTML(response))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));
}
  init();
