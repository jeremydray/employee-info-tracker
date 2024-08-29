const inquirer = require('inquirer');
const express = require('express');
const { Pool } = require('pg');
const { viewDepartments, viewRoles, viewEmployees } = require('./queries/db_queries')


const PORT = process.env.PORT || 3002;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function start() {
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
                ]
            },
        ])
        .then((input) => {
            console.log(input)
            const selectedOption = input.selection;
            switch (selectedOption) {
                case 'VIEW_DEPARTMENTS':
                    viewDepartments()
                    break;
                case 'VIEW_ROLES':
                    viewRoles()
                    break;
                case 'VIEW_EMPLOYEES':
                    viewEmployees()
                    break;
                default:
                    console.log('Error, could not load selection');
            }
        });
}

start();

app.listen(PORT, () => {
    console.log();
});

