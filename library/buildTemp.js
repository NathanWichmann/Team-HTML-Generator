//generate the team 
const generateTeam = team => {
    return `
    <div class="card employee-card" style="width: 18rem;">
  <div class="card-header">
    <h1 class="card-title">${manager.getRole()}<i class="fas fa-mug-hot"></i></h1>
    <h2 class="card-name">${manager.getName()}</h2>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID ${manager.getId()}</li>
    <li class="list-group-item">Email ${manager.getEmail()}</li>
    <li class="list-group-item">Office Number ${manager.officeNumber()}</li>
  </ul>
</div>
    `
};

co