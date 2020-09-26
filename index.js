const inquirer = require('inquirer')
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// console.log(inquirer);
// console.log(axios);
// console.log(path);

async function generator() {
    console.log('Starting a new descriptive adventure!');
    const readMeCreator = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of your Project?',
                name: 'projectTitle'
            },
            {
                type: 'input',
                message: 'Provide a description of your Project?',
                name: 'projectDescription'
            },
            {
                type: 'input',
                message: 'Provide a step by step to fire your Project? What package are you installing.',
                name: 'TableContent'
            },
            {
                type: 'input',
                message: 'Provide instructions on what you need to install.',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'Provide instructions how what you will need to use this generator.',
                name: 'howToUse'
            },
            {
                type: 'input',
                message: 'provide License name ',
                name: 'license'
            },
            {
                type: 'input',
                message: 'Name all your contributors on this projects?',
                name: 'contributors'
            },
            {
                type: 'input',
                message: 'Provide examples on how to run tests.',
                name: 'tests'
            },
            {
                type: 'input',
                message: 'What is your GitHub user name?',
                name: 'username'
            },
            {
                type: 'input',
                message: 'Do you want to add your GitHub Profile Picture',
                name: 'profilePicture'
            },
        ])

    console.log('End Result from all the questions');
    console.log(readMeCreator);

    const title = readMeCreator.projectTitle;
    const description = readMeCreator.projectDescription;
    const content = readMeCreator.TableContent;
    const install = readMeCreator.installation;
    const usage = readMeCreator.howToUse;
    const license = readMeCreator.license;
    const contributors = readMeCreator.contributors;
    const test = readMeCreator.test;
    const userName = readMeCreator.username;
    const picture = readMeCreator.profilePicture;
    
    const ghRequest = await axios.get(`https://api.github.com/users/${userName}`);
    // console.log(ghRequest);
    const ghData = ghRequest.data;
    // const gh


};

generator();
