const htmlTemplate = (employeeArray) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            ${employeeArray[0].name}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ${employeeArray[0].id}</li>
            <li class="list-group-item"> ${employeeArray[0].email}</li>
            <li class="list-group-item"> ${employeeArray[0].officeNumber}</li>
        </ul>
    </div>
</body>
</html>`
}


module.exports = htmlTemplate;