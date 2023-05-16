const mysql = require('mysql2');
const inquirer = require('inquirer');
const { printTable } = require('console-table-printer');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'RidaRiza@123',
        database: 'employee_db'
    },
    console.log(`Connected to the classlist_db database.`)
)
db.connect(() => {
    mainMenu()
})

//view all departments, view all roles, view all employees, add a department, add a role, add 
//an employee, and update an employee role
function mainMenu() {
    inquirer
        .prompt([

            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'menu',
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role',
                    'add an employee', 'update an employee role'],
            },
        ])
        .then((data) => {
            if (data.menu === 'view all departments') {
                viewDepartment()
            }
            else if (data.menu === 'view all roles') {
                viewRoles()
            }
            else if (data.menu === 'view all employees') {
                viewEmployees()
            }
            else if (data.menu === 'add a department') {
                addDepartment()
            }
        })
}

function viewDepartment() {
    db.query('SELECT * FROM department', (err, data) => {
        printTable(data)
        mainMenu()
    })
}

function viewRoles() {
    db.query('SELECT * FROM role', (err, data) => {
        printTable(data)
        mainMenu()
    })
}

function viewEmployees() {
    db.query('SELECT * FROM employee', (err, data) => {
        printTable(data)
        mainMenu()
    })
}

function addDepartment() {
    inquirer.prompt([{
        type: 'input',
        message: 'What department you want to add?',
        name: 'departmentname'
    }])
        .then(data => {
            db.query('INSERT INTO department(name) values (?)', [data.departmentname], (err) => {
                viewDepartment()
            })
        })
}

function addEmployee() {
    inquirer.prompt([{
        type: 'input',
        message: 'Enter first name.',
        name: 'firstName'
    }, {
        type: 'input',
        message: 'Enter last name.',
        name: 'lastName'
    }, {
        type: 'input',
        message: 'Enter roleId',
        name: 'roleId'
    }, {
        type: 'input',
        message: 'Enter managerId',
        name: 'managerId'

    }])

        .then(data => {
            db.query('INSERT INTO employee(first_name,last_name,role_id,manager_id)values(?,?,?,?)', [data.firstName, data.lastName, data.roleId, data.managerId], (err) => {
                viewEmployees()
            })
        })
}
