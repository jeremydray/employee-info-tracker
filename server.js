const inquirer = require('inquirer');
const express = require('express');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3002;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool(
    {
        user: 'postgres',
        password: 'Hunter123!',
        host: 'localhost',
        database: 'employee_db'
    },
    console.log(`Connected to Employee Database System!`)
)

pool.connect();

const navigationQuestion =
    [
        {
            type: 'list',
            name: 'selection',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
        },
    ];


function start() {
    inquirer
        .prompt(navigationQuestion)
        .then((input) => {
            const selectedOption = input.selection;

            switch (selectedOption) {
                case 'View All Departments':
                    app.get('/api/department', (req, res) => {
                        pool.query('SELECT * FROM department', (err, data) => {
                            console.table(data)
                        })
                    });
                    break;
                case 'View All Roles':
                    app.get('/api/role', (req, res) => {
                        pool.query('SELECT * FROM role', (err, { rows }) => {
                            console.log(re)
                        })
                    });
                    break;
                    break;
                case 'View All Employees':
                    app.get('/api/employee', (req, res) => {
                        pool.query('SELECT * FROM employee', (err, data) => {
                            console.log(data)
                        })
                    });
                    break;
                default:
                    console.log('This is not working correctly');
            }
        });
    ;
}

start();

app.listen(PORT, () => {
    console.log();
});