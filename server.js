const express = require('express');
const inquirer = require("inquirer");
const fs = require("fs");
const sequelize = require('./config/connection');
const cTable = require('console.table');

// call express 
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route for express to initiate 
app.get('/', function(req, res){
  res.send('welcome to express');
});

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


function startEmployeeManager() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Departments",
          "View All Roles",
          "Add Employee",
          "Add Department",
          "Add Role",
          "Update Employee Role",
          "Exit"
        ]
      })
      .then(function(answer) {   
  })};

function viewAllEmployees() {
    inquirer
      .prompt({
      })
      .then(function(answer) {   
        startEmployeeManager()
})};

function viewAllDepartments() {
    inquirer
      .prompt({
      })
      .then(function(answer) {   
        startEmployeeManager()
})};

function viewAllRoles() {
    inquirer
      .prompt({
      })
      .then(function(answer) {   
        startEmployeeManager()
})};

function addEmployee() {
    inquirer
      .prompt({
      })
      .then(function(answer) {  
        startEmployeeManager() 
})};

function addDepartment() {
    inquirer
      .prompt({
      })
      .then(function(answer) {  
        startEmployeeManager() 
})};

function addRole() {
    inquirer
      .prompt({
      })
      .then(function(answer) {   
        startEmployeeManager()
})};

function updateEmployeeRole() {
    inquirer
      .prompt({
      })
      .then(function(answer) {  
        startEmployeeManager() 
})};


