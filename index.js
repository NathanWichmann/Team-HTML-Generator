const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./library/Manager')
const Engineer = require('./library/Engineer')
const Intern = require('./library/Intern')
const generateHTML = require('./library/buildTemp')

const team = [];
const writeFileAsync = util.promisify(fs.writeFile);


const continueBuild = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'teamMember',
      message: 'what team member do you want to build',
      choices: ['Intern', 'Engineer', 'I dont not want to add more team members'],
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    }
  ])
    .then((answer) => {
      switch (answer.teamMember) {
        case 'Intern':
          return promptIntern();
        case 'Engineer':
          return promptEngineer();
        default:
          console.log("Writing your file!")
          return renderTeamPage(team)

      }
    })
}


const promptUserManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'what is your email?',
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?',
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    },
    {
      type: 'input',
      name: 'office',
      message: 'what is your office number?',
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    }
  ]).then((response) => {

    const manager = new Manager(response.name, response.email, response.id, response.office)
    team.push(manager);

    continueBuild()
  })
};
const init = () => {
  promptUserManager()

};



const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your Id?',
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },

    },
    {
      type: 'input',
      name: 'github',
      message: 'what is your Git Hub username?',
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    }
  ])
    .then((response) => {
      
      console.log(response)

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
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your Id?',
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    },
    {
      type: 'input',
      name: 'school',
      message: 'what is your School name?',
      validate: (value) => {
        if (value) { return true }
        else { return 'please enter a value' }
      },
    }
  ])
    .then((response) => {

      console.log(response)
      const intern = new Intern(response.name, response.email, response.id, response.school)
      team.push(intern);

      continueBuild()
    })
};



function renderTeamPage(response) {
  writeFileAsync('index.html', generateHTML(response))
    .catch(err => console.error(err))
  console.log('index.html', generateHTML(response))

}
init();
