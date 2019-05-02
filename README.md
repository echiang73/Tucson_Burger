# Tucson_Burger :hamburger: :hot_pepper:
Welcome to Tucson Burger, the "hottest" burger joint in this part of the Southwest! Tucson Burger is a fun, dynamic, user-interactive full-stack web app that allows the user to order a burger, pick up the burger (or send back to kitchen), or devour it!  Responsive web design with media queries is incorporated, so the burger ordered on the beautiful web app looks as delicious on your mobile device as on the larger desktop display.

## Technical overview
This full-stack application utilizes the Model/View/Controller (MVC) design pattern in which the Controller serve as the interface to handle the logic and routing between Model or the application database core and View to dynamically render HTML content in response to the user/client requests. Specifically, the app is built with Node.js, Express.js, and Handlebars to handle the logic and to route the client requests to MySQL database using a homemade Object Relational Mapping (ORM) technique to retrive information to dynamically build HTML pages to display the content back to the client.  To run the server codes, the app is deployed live on Heroku.

## Built with or topics covered
* HTML5
* CSS3
* JavaScript
* jQuery
* Model View Controller (MVC)
* Object Relational Mapping (ORM)
* Express.js
    * HTTP Requests (GET, POST)
    * Routes and static content
    * Handlebars engine integration
* Node.js
    * Backend API calls
* MySQL
* Handlebars Templates and Layouts
* Node Package Manager (npm)
* Media queries

## npm packages: 
* [Express] (https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node to handle routing.
* [Express-Handlebars] (https://www.npmjs.com/package/express-handlebars) - A view engine that utilizes logicless Mustache templating language for Express that keep the view and the code separated.
* [MySQL] (https://www.npmjs.com/package/mysql) - A Node.js module driver for MySQL databases.

#### Directory structure

All the recommended files and directories should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│
├── node_modules
│
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       ├── img
│       │    └── background.jpg
│       │    └── hot.png
│       │    └── mobilepreview.gif
│       │    └── webpreview.gif
│       └── js
│            └── burgers.js
├── server.js
│
└── views
    ├── index.handlebars
    ├── layouts
    │    └── main.handlebars
    └── partials
        └── burgers
                └── burger-block.handlebars
```

## Author
* Eddie Chiang
* Click on the deployed app on Heroku!
https://stormy-headland-83592.herokuapp.com/
* Click on the GitHub link to view code!
https://github.com/echiang73/Tucson_Burger


## Here are the previews of the web application:

![](public/assets/images/webpreview.gif "gif")

![](public/assets/images/mobilepreview.gif "gif")
