const express = require("express");
const inquirer = require("inquirer");
const sequelize = require("./config/connection");
const cTable = require("console.table");

// call express
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route for express to initiate
app.get("/", function (req, res) {
  res.send("welcome to express");
});

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
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
        "Exit",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "View All Departments":
          viewAllDepartments();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "Exit":
          text = "Bye!";
          break;
        default:
          text = "No value found";
      }
    });
}

function viewAllEmployees() {
  sequelize.query("", function(error, response){
    if(error) throw error
    console.table(response)
  startEmployeeManager();
})
}

function viewAllDepartments() {
  startEmployeeManager();
}

function viewAllRoles() {
  startEmployeeManager();
}

function addEmployee() {
  inquirer.prompt({}).then(function (answer) {
    startEmployeeManager();
  });
}

function addDepartment() {
  inquirer.prompt({}).then(function (answer) {
    startEmployeeManager();
  });
}

function addRole() {
  inquirer.prompt({}).then(function (answer) {
    startEmployeeManager();
  });
}

function updateEmployeeRole() {
  inquirer.prompt({}).then(function (answer) {
    startEmployeeManager();
  });
}
