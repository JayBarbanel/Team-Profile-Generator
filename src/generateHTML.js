function generateHTML(data) {
    let employeeCards = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() == "Manager") {
            const card = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Name: ${data[i].name}</p>
    <p class="card-text">Id: ${data[i].id}</p>
    <p class="card-text">Email: ${data[i].email}</p>
    <p class="card-text">Office Number: ${data[i].officeNumber}</p>
  </div>
</div>
`
            employeeCards = employeeCards + card
        } else if (data[i].getRole() == "Intern") {
            const card = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Name: ${data[i].name}</p>
    <p class="card-text">Id: ${data[i].id}</p>
    <p class="card-text">Email: ${data[i].email}</p>
    <p class="card-text">School: ${data[i].school}</p>
  </div>
</div>
`
            employeeCards = employeeCards + card
        } else if (data[i].getRole() == "Engineer") {
            const card = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Name: ${data[i].name}</p>
    <p class="card-text">Id: ${data[i].id}</p>
    <p class="card-text">Email: ${data[i].email}</p>
    <p class="card-text">Github: ${data[i].github}</p>
  </div>
</div>
`
            employeeCards = employeeCards + card
        }
    }
    return ` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
</head>
<body>
   ${employeeCards}
</body>
</html>
`
}



module.exports = generateHTML