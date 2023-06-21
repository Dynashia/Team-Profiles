const Engineer = require('.lib/Engineer')
const Intern = require('.lib/Intern')
const Manager = require('lib/Manager')
const inquirer = require ('inquirer');

const path = require('path');
const fs = require('fs');


//engineer questions
const employees =[
    {
        type: 'input',
        name: 'name',
        message: 'What is your managers name?',

    }
];

