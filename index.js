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
    console.log(ghRequest);
    const ghData = ghRequest.data;
    const login = ghData.login;
    const avatar = ghData.avatar_url;
    const url = ghData.url;

    const finalProduct = (`
    # ${title}
    ${description}
    \n## Table of Contents
    \n* [What you'll need to run program](#install)
    \n* [How to Use Application](#usage)
    \n* [License](#license)
    \n* [Contributors](#contributors)
    \n* [Example](#test)
    \n
    ## Programs/packages to install to run program
    ${install}
    \n
    ## How to Use Application
    ${usage}
    \n
    ## License 
    ${license}
    \n
    ## List of Contributors
    ${contributors}
    \n
    ## Example of a final product
    ${test}
    \n
    ## Author
    \n![ProfileImage](${avatar})
    \n
    ## Git Hub User Name
    \n**${login}**
    \n
    ## Author Git Hub URL Link
    \n**${url}
    `)

    const writeResult = fs.readFileSync(path.join(__dirname, './assets', 'readme.md'),
        finalProduct)
    console.log('Generating File...');
};

generator();

// Creating an application or function to help create a ReadMe with the vitality to be effective.The generator will be structured in a specific form to maximize transfer of information from handler to user.
