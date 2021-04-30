//generate the team 
//this is the second array created that takes the information from the team array and combines them to generate the roles of eaach employee
const teamMemberHtml = [];


const generateHTML = team => {
  console.log("team", team)
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      teamMemberHtml.push(generateManger(team[i]))
    }
    if (team[i].getRole() === "Engineer") {
      teamMemberHtml.push(generateEngineer(team[i]));

    }
    if (team[i].getRole() === "Intern") {
      teamMemberHtml.push(generateIntern(team[i]));
    }

  }
  // return teamMemberHtml.join('')
  //this is the syling required to run the page, it is joined together with the 3 other functions below to greate the entire team, without the join it would be seperate pieces
  return `
  <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Team</title>
      <!-- Latest compiled and minified CSS & JS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="https://code.jquery.com/jquery.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="https://kit.fontawesome.com/4d07055d3e.js" crossorigin=“anonymous”></script>
      <style>
          .shadow {
              box-shadow: 5px 5px 5px grey;
          }
      </style>
  </head>
  <body>
  <div class="container-fluid p-0 mb-0">
  <div class="jumbotron jumbotron-fluid bg-danger text-light">
      <div class="container text-center">
          <h1 class="display-4">My Team</h1>
      </div>
  </div>
  <div class="container">
      <div class="row justify-content-center" id="cards">
      
   ${teamMemberHtml.join('')}
  </body>
  </html>

  `
};
//this function combines all the info from the teammemberhtml array and displays the responses in the html 
function generateManger(member) {
  return `
  <div class="col-md-4 py-2">
  <div class="card employee-card" style="width: 18rem;">
<div class="card-header bg-primary text-white shadow">
  <h1 class="card-title">${member.getName()}</h1>
  <h2 class="card-name"> <i class="fas fa-mug-hot"></i> ${member.getRole()} </h2>
</div>
<div class="card-body bg-light">
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${member.getId()}</li>
  <li class="list-group-item">Email: <a href="mailto:">${member.getEmail()}</a></li>
  <li class="list-group-item">Office Number: ${member.getOfficeNumber()}</li>
</ul>
</div>
</div>
</div>
  `
}
//this function combines all the info from the teammemberhtml array and displays the responses in the html 
function generateEngineer(member) {
  // console.log("inside the engineer function", member)
  return `
  <div class="col-md-4 py-2">
  <div class="card employee-card" style="width: 18rem;">
<div class="card-header bg-primary text-white shadow">
  <h1 class="card-title"> ${member.getName()}</h1>
  <h2 class="card-name"> <i class="fas fa-glasses"></i> ${member.getRole()}</h2>
</div>
<div class="card-body bg-light">
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${member.getId()}</li>
  <li class="list-group-item">Email: <a href="mailto:">${member.getEmail()}</a></li>
  <li class="list-group-item">Github User Name:  <a href="http://github.com/undefined/">${member.getGitHub()}</a></li>
</ul>
</div>
</div>
</div>
  `
}
//this function combines all the info from the teammemberhtml array and displays the responses in the html 
function generateIntern(member) {
  return `
  <div class="col-md-4 py-2">
  <div class="card employee-card" style="width: 18rem;">
<div class="card-header bg-primary text-white shadow">
  <h1 class="card-title">${member.getName()}</h1>
  <h2 class="card-name"> <i class="fas fa-graduation-cap"></i> ${member.getRole()}</h2>
</div>
<div class="card-body bg-light">
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${member.getId()}</li>
  <li class="list-group-item">Email: <a href="mailto:">${member.getEmail()}</a></li>
  <li class="list-group-item">School: ${member.getSchool()}</li>
</ul>
</div>
</div>
</div>
  `
}












module.exports = generateHTML;