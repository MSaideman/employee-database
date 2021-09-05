const inquirer = require("inquirer");
const db = require("./config/connection");
const cTable = require("console.table");

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
          console.log("bye!");
          db.end();
          break;
        default:
          break;
      }
    });
}

function viewAllEmployees() {
  db.query("SELECT * FROM employee", function (error, response) {
    if (error) throw error;
    console.table(response);
    startEmployeeManager();
  });
}

function viewAllDepartments() {
  db.query("SELECT * FROM department", function (error, response) {
    if (error) throw error;
    console.table(response);
    startEmployeeManager();
  });
}

function viewAllRoles() {
  db.query("SELECT * FROM job", function (error, response) {
    if (error) throw error;
    console.table(response);
    startEmployeeManager();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is the employee's first name?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the employee's last name?",
      },
      {
        name: "role",
        type: "input",
        message: "What is the employee's role?",
      },
      {
        name: "manager",
        type: "input",
        message: "Who is the employee's manager?",
      },
    ])
    .then(function (response) {
      db.query(
        "INSERT INTO employee SET first_name= ?, last_name = ?, role_id = ?, manager_id = ?",
        [
          response.firstName,
          response.lastName,
          response.role,
          response.manager,
        ],
        function (error, response) {
          if (error) throw error;
          console.table('\nSuccessfully added employee!\n');
          startEmployeeManager();
        }
      );
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What department should be added?",
      },
    ])
    .then(function (response) {
      db.query(
        "INSERT INTO department SET dept_name = ?",
        response.department,
        function (error, response) {
          if (error) throw error;
          console.table('\nSuccessfully added department!\n');
          startEmployeeManager();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the role's title?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the role's salary?",
      },
      {
        name: "department",
        type: "input",
        message: "What is the role's department?",
      },
    ])
    .then(function (response) {
      db.query(
        "INSERT INTO job SET title = ?, salary = ?, department_id = ?",
        [response.title, response.salary, response.department],
        function (error, response) {
          if (error) throw error;
          console.table('\nSuccessfully added role!\n');
          startEmployeeManager();
        }
      );
    });
}

function updateEmployeeRole() {
  inquirer.prompt([
    {
      name: "role",
      type: "input",
      message: "What is their new role?",
    },
    {
      name: "employee",
      type: "input",
      message: "What is the employee's ID?",
    }
  ])
  .then(function (response) {
    db.query(
      "UPDATE employee SET role_id =? WHERE id =?",
      [response.role, response.id],
      function (error, response) {
        if (error) throw error;
        console.table(response.employee `has been updated!`);
        startEmployeeManager();
      }
    );
  });
}
startEmployeeManager();
