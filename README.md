# 10 Object Oriented Programming: HTML-Team-Generator
This repository (HTML-Team-Generator) is an educational homework assignment from the CARL-OTT-FSF-PT-02-20121-U-C course. It was designed to help students become 
more familiar with Object Oriented Programming, particularily with class constructors. We were tasked with greating an application that generates members of a team, which provides a manager with their name, id, email, github user name, office number and school. 
We used the command line line with node.js and inquirer to generate the questions and put the responses on an html generater that creates the page with the team information. 

## Link to te Video 





## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```