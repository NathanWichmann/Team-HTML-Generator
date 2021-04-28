//generate the team 
const generateHTML = team => {
  console.log("team", team)
    return `
    <div class="card employee-card" style="width: 18rem;">
  <div class="card-header">
    <h1 class="card-title">${team.getRole()}<i class="fas fa-mug-hot"></i></h1>
    <h1 class="card-title">${team.manager ? "render this name": "render other value"}<i class="fas fa-mug-hot"></i></h1>
    <h2 class="card-name">${team.getName()}</h2>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID ${team.getId()}</li>
    <li class="list-group-item">Email ${team.getEmail()}</li>
    <li class="list-group-item">Office Number ${team.officeNumber()}</li>
  </ul>
</div>
    `
};


module.exports = generateHTML;