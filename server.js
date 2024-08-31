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
                    setTimeout(function () {
                        viewDepartments();
                        setTimeout(function () {
                            start()
                        }, 1000)
                            , 1000
                    })
                    break;
                case 'VIEW_ROLES':
                    setTimeout(function () {
                        viewRoles();
                        setTimeout(function () {
                            start()
                        }, 1000)
                            , 1000
                    })
                    break;
                case 'VIEW_EMPLOYEES':
                    setTimeout(function () {
                        viewEmployees();
                        setTimeout(function () {
                            start()
                        }, 1000)
                            , 1000
                    })
                    break;
                case 'ADD_DEPARTMENT':
                    addDepartment();
                    break;
                case 'ADD_ROLE':
                    addRole()
                    break;
                case 'ADD_EMPLOYEE':
                    addEmployee()
                    break;
                case 'EXIT':
                    process.exit();
                    break;
                default:
                    console.log('Error, could not load selection');
            }
        })
}


start();

app.listen(PORT, () => {
    console.log();
});
