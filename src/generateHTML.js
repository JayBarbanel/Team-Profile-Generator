// This is the main function to generate html - the forloop goes through the arrays
function generateHTML(data) {
    let employeeCards = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() == "Manager") {
            // console.log(data[i])
            const card =
                //This is how the html will be built once the HTML file is created.
                `
            <div class="col-sm-4">
<div class="card" style="width: 18rem;">
<div class="card-header">
    <h5 class="card-title">${data[i].name}</h5>
    <p class="card-text">${data[i].getRole()}</p>
    <i class="fas fa-mug-hot"></i>
</div>
    <p class="card-text">Email: <a href = "mailto:${data[i].email}">${data[i].email}</a></p>
    <p class="card-text">Id: ${data[i].id}</p>
    <p class="card-text">Office Number: ${data[i].officeNumber}</p>
  </div>
</div>
`

            employeeCards = employeeCards + card
        } else if (data[i].getRole() == "Intern") {
            // console.log(data[i])
            const card = `      
            <div class="col-sm-4">   
<div class="card" style="width: 18rem;">
<div class="card-header">
  <h5 class="card-title">${data[i].name}</h5>
  <p class="card-text">${data[i].getRole()}</p>
  <i class="fas fa-user-graduate"></i>
</div>
    <p class="card-text">Email: <a href = "mailto:${data[i].email}">${data[i].email}</a></p>
    <p class="card-text">Id: ${data[i].id}</p>
    <p class="card-text">School: ${data[i].school}</p>
  </div>
</div>
`
            employeeCards = employeeCards + card
        } else if (data[i].getRole() == "Engineer") {
            // console.log(data[i])
            const card = `    
            <div class="col-sm-4">  
<div class="card" style="width: 18rem;">
<div class="card-header">
  <h5 class="card-title">${data[i].name}</h5>
  <p class="card-text">${data[i].getRole()}</p>
  <i class="fas fa-tools"></i>
</div>
    <p class="card-text">Email: <a href = "mailto:${data[i].email}">${data[i].email}</a></p>
    <p class="card-text">Id: ${data[i].id}</p>
    <p class="card-text">Github: <a href="${data[i].github}">${data[i].github}</a></p>
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
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Cormorant+Garamond:ital,wght@0,300;1,600&family=DM+Serif+Display&family=Kanit:wght@100;300&family=Nunito:wght@200&family=Thasadith:wght@400;700&display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/5b3d6d23d6.js" crossorigin="anonymous"></script>
</head>
<body>
<header class="header"> MY TEAM</header>
<video autoplay muted loop id="myVideo">
<source src="./Office - 6389.mp4" type="video/mp4">
</video>
<div class="container">
<div  class="row justify-content-center w-100">
   ${employeeCards}
</div>
</div>
</body>
</html>
`
}

// The above is the layout of the full html file.  


module.exports = generateHTML