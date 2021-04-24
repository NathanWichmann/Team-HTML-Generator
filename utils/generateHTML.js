
const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
  <style>
  .jumbotron {
      background-color: red;
      text-align: center;
  }
  .card {
      
      justify-content: space-between;
  }

  </style>
</head>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4;">My Team</h1>
    
  </div>
</div>
<div class="container">
    <div class="row">
    <div class="col-sm">
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    Manager
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: </li>
    <li class="list-group-item">Email:</li>
    <li class="list-group-item">Office number: </li>
  </ul>
</div>
</div>
  <div class="col-sm">
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Engineer
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: </li>
    <li class="list-group-item">Email:</li>
    <li class="list-group-item">Git Hub:</li>
  </ul>
</div>
</div>
  <div class="col-sm">
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    Engineer
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:</li>
    <li class="list-group-item">Email:</li>
    <li class="list-group-item">Git Hub:</li>
  </ul>
</div>
</div>
</div>


<div class="container">
<div class="row"> 
<div class="col-sm">
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    Engineer
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:</li>
    <li class="list-group-item">Email:</li>
    <li class="list-group-item">Git Hub</li>
  </ul>
</div>
</div>

  <div class="col-sm">
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    Intern
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:</li>
    <li class="list-group-item">Email:</li>
    <li class="list-group-item">School:</li>
  </ul>
</div>
</div>
</div>
</div>

</body>
</html>`;


module.exports = generateHTML;