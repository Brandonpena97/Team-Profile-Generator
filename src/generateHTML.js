const htmlTemplate = (employeeArray) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
 </head>
<body>
    <header>
        <h1 class="myTeam"> My Team </h1>
    </header>
    <div class="employeeBoxes">
      ${employeeArray.map((employee)=>{
          return generateCard (employee)
      })}
    </div>    
</body>
</html>`
}
const generateCard = (employee) => {

    let fourthProperty = ""

    if (employee.getRole()=="Manager"){
        fourthProperty = `<li class="list-group-item"> ${employee.officeNumber}</li>`
    } else if (employee.getRole()=="Engineer"){
        fourthProperty = `<li class="list-group-item"> ${employee.github}</li>`
    } else if (employee.getRole()=="Intern"){
        fourthProperty = `<li class="list-group-item"> ${employee.school}</li>`
    }


    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
        ${employee.name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> ${employee.id}</li>
        <li class="list-group-item"> ${employee.email}</li>
        ${fourthProperty}
    </ul>
</div>`
}


module.exports = htmlTemplate;