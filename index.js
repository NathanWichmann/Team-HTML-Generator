// this brings in the inquirer to ask the questions
const inquirer = require('inquirer');
//this writes the file
const fs = require('fs');
//provieds access to some utility functions
const util = require('util');
//brings in the manager page
const Manager = require('./library/Manager')
//brings in the engineer page
const Engineer = require('./library/Engineer')
//brings in the intern page 
const Intern = require('./library/Intern')
//brings in the buildtemp page
const generateHTML = require('./library/buildTemp')
//creates the first array from the questions and responses 
const team = [];
//writes the file 
const writeFileAsync = util.promisify(fs.writeFile);

//stops the user and asks if they want to add a teammeber of intern or engineer if neither it then renders the team page and starts the writting process
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

//this is the first promt of manager and it asks the questions and once finished runs the continue build function and creates a loop
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
    //this creates the new manager with the responses and pushes manager to the team array above 
    const manager = new Manager(response.name, response.email, response.id, response.office)
    team.push(manager);
    //this crreates the loop that doesnt end until you say you dont want to build anymore team members
    continueBuild()
  })
};
const init = () => {
  promptUserManager()

};


//this creates the engineer and asks the questions and puts the response into the team array
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
      //this creates the new engineer and adds the responses and pushes them to the team array
      const engineer = new Engineer(response.name, response.email, response.id, response.github)
      team.push(engineer);
      //here is the loop in action again
      continueBuild()
    })
};
//this creates the intern and asks the questions and pushes the responses to the team array 
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
      // this creates the new intern and pushes the responses to the team array
      console.log(response)
      const intern = new Intern(response.name, response.email, response.id, response.school)
      team.push(intern);
      //here is the loop in action again
      continueBuild()
    })
};


//this function is called at the end of the continue build function and writes the responses to generate html function of the buildtemp file, pushinf the team array
function renderTeamPage(response) {
  writeFileAsync('index.html', generateHTML(response))
    .catch(err => console.error(err))
  console.log('index.html', generateHTML(response))

}
init();
