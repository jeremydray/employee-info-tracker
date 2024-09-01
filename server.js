const inquirer = require('inquirer');
const express = require('express');
const { Pool } = require('pg');
const { viewDepartments, viewRoles, viewEmployees } = require('./queries/db_queries');
const { addDepartment, addRole, addEmployee } = require('./queries/db_addData');

const PORT = process.env.PORT || 3002;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const start = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                message: 'What would you like to do?',
                choices: [
                    {
                        name: 'View All Departments',
                        value: 'VIEW_DEPARTMENTS'
                    },
                    {
                        name: 'View All Roles',
                        value: 'VIEW_ROLES'
                    },
                    {
                        name: 'View All Employees',
                        value: 'VIEW_EMPLOYEES'
                    },
                    {
                        name: 'Add a Department',
                        value: 'ADD_DEPARTMENT'
                    },
                    {
                        name: 'Add a Role',
                        value: 'ADD_ROLE'
                    },
                    {
                        name: 'Add an Employee',
                        value: 'ADD_EMPLOYEE'
                    },
                    {
                        name: 'Close App',
                        value: 'EXIT'
                    },
                ]
            },
        ])
        .then((input) => {
            const selectedOption = input.selection;
            switch (selectedOption) {
                case 'VIEW_DEPARTMENTS':
                    viewDepartments(start);
                    break;
                case 'VIEW_ROLES':
                    viewRoles(start);
                    break;
                case 'VIEW_EMPLOYEES':
                    viewEmployees(start);
                    break;
                case 'ADD_DEPARTMENT':
                    addDepartment(start);
                    break;
                case 'ADD_ROLE':
                    addRole(start)
                    break;
                case 'ADD_EMPLOYEE':
                    addEmployee(start)
                    break;
                case 'EXIT':
                    process.exit();
                default:
                    console.log('Error, could not load selection');
            }
        })
}

app.listen(PORT, () => {
    start();
    console.log();
});

module.exports = start