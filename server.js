const express = require('express');
const inquirer = require("inquirer");
const fs = require("fs");
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
})};

function viewAllDepartments() {
    inquirer
      .prompt({
      })
      .then(function(answer) {   
})};

function viewAllRoles() {
    inquirer
      .prompt({
      })
      .then(function(answer) {   
})};

function addEmployee() {
    inquirer
      .prompt({
      })
      .then(function(answer) {   
})};

function addDepartment() {
    inquirer
      .prompt({
      })
      .then(function(answer) {   
})};

function addRole() {
    inquirer
      .prompt({
      })
      .then(function(answer) {   
})};

function updateEmployeeRole() {
    inquirer
      .prompt({
      })
      .then(function(answer) {   
})};


