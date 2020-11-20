# Eat Da Burger
 burger logger created with MySQL, Node, Express, Handlebars and a homemade ORM.

![screen shot of desktop](/public/assets/img/main.jpg)
[link to site](https://polar-gorge-62998.herokuapp.com/)

## Description
This application uses MySQL, Node, Express, Handlebars and a homemade ORM to render a list of burgers that the user can sort into two categories and they can add their own burgers to the list.
![demo](/public/assets/img/demo.gif)   


## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Features](#Features)
* [Screenshots](*Screenshots)
* [Questions](#Questions)
## Installation
```
npm install

```

run in the command line:
``` 
node .\server.js
```
## Features
Utilizes sequelize MVP framework to render data to the page.
custom css bite mark in burger cards that are in the eaten category using svg objects.  
WHEN the user fills out the form and clicks 'add burger' it is added to the database and rendered to the page.  
WHEN the user clicks 'Eat Me!' for a particular burger its 'devoured' property is changed in the database and it is rendered in the 'already eaten' category.  
WHEN the user clicks 'Eat Again' for a particular burger its 'devoured' property is changed in the database and it is rendered in the 'to eat' category.  

## Screenshots
![screenshot of main screen](/public/assets/img/main.jpg)
![screenshot of form screen](/public/assets/img/form.jpg)

## Questions
[github](https://github.com/nick75mowbray)
