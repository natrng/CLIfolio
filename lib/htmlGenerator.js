/*eslint-disable */


module.exports = (firstname, lastname, linkedin, github, location, bio, email) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
    <style>
      .list-group {
        flex-direction: row;
        justify-content: space-around;
      }
    </style>
    <title>portfolio</title>
  </head>
  <body>
    <div class="container">
      <div class="col">
        <div class="jumbotron jumbotron-fluid bg-info">
          <div class="container">
            <h1 class="display-4">${firstname} ${lastname}</h1>
            <p class="lead">${bio}</p>
          </div>
        </div>
        <div class="col">
          <ul class="list-group">
          <li class="list-group-item">
            <i class="fas fa-map-marker-alt"></i> ${location}
          </li>
            <li class="list-group-item">
              <a href="${linkedin}">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li class="list-group-item">
              <a href="${github}">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="list-group-item">
              <a href="mailto:${email}"><i class="fas fa-at"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>

`;

