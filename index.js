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
                message: 'What is your full Name?',
                name: 'authorName'
            },
            {
                type: 'input',
                message: 'What is the name of your Project?',
                name: 'projectTitle'
            },
            {
                type: 'input',
                message: 'What is the purpose of this application.',
                name: 'description'
            },
            {
                type: 'input',
                message: 'What package are you installing.',
                name: 'packages'
            },
            {
                type: 'input',
                message: 'Provide a step by step to fire your Project?',
                name: 'projectSteps'
            },
            {
                type: 'input',
                message: 'Provide instructions on what you will need to use this generator.',
                name: 'howToUse'
            },
            {
                name: 'license',
                type: 'rawlist',
                choices: ['BSD', 'MIT', 'GPL'],
                message: 'Choose a License.'
            },
            {
                type: 'input',
                message: 'Name all your contributors on this projects? Press Enter if no Contributors.',
                name: 'contributors'
            },
            {
                type: 'input',
                message: 'What is your GitHub user name?',
                name: 'username'
            },
            {
                name: 'profilePicture',
                type: 'list',
                choices: ['Yes', 'No'],
                message: 'Do you want to add your GitHub Profile Picture?'
            }
        ])

    console.log('End Result from all the questions');
    console.log(readMeCreator);

    const { authorName,
        projectTitle,
        description,
        packages,
        projectSteps,
        howToUse,
        license,
        contributors,
        userName,
        profilePicture } = readMeCreator;
    
    

    // const title = readMeCreator.projectTitle;
    // const description = readMeCreator.description;
    // const packages = readMeCreator.packages;
    // const projectSteps = readMeCreator.projectSteps;
    // const howToUse = readMeCreator.howToUse;
    // const license = readMeCreator.license;
    // const contributors = readMeCreator.contributors;
    // const userName = readMeCreator.username;
    // const profilePicture = readMeCreator.profilePicture;
    // const authorName = readMeCreator.authorName;

    
    const { data: {login, avatar_url:avatar, html_url:url} } = await axios.get(`https://api.github.com/users/${userName}`);
    // console.log(data);
    // const ghData = ghRequest.data;
    // const login = ghData.login;
    // const avatar = ghData.avatar_url;
    // const url = ghData.html_url;

    const finalProduct = (`# ${projectTitle}
    \n
[![Repo size](https://img.shields.io/github/repo-size/sfcarz/GoodReadMeGenerator)](https://github.com/sfcarz/GoodReadMeGenerator)
    \n## Description of this ReadMe Generator/CLI
    \n${description}
    \n## Table of Contents
- [What you'll need to run program](#install)
- [How to Use Application](#step-By-step)
- [License](#license)
- [How to use Application](#howToUse)
- [Example](#Example)
- [Contributors](#contributors-/-Credits)
    \n## Install\nYou will need these packages to run the Generator\n * ${packages}
    \n## Step By Step\n * ${projectSteps}
    \n## How to Use\n * ${howToUse}
    \n## Example\n * ![](readMe.gif)
    \n## License
    \n * ${license}
    \n## Contributors / Credits
    \n * ${contributors}
    \n## Author\n * ${authorName}
    \n![ProfileImage](${avatar})
    \n## Git Hub User Name\n * ${login}
    \n## Author Git Hub URL Link\n(${url})
    `)


    const writeResult = fs.writeFileSync(path.join(__dirname, 'assets', 'readme.md'),
        finalProduct);

    console.log('Generating File...');
};

generator(); 

// // Creating an application or function to help create a ReadMe with the vitality to be effective.The generator will be structured in a specific form to maximize transfer of information from handler to user.
// [![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bhagatabhijeet/chalkyourteam)
//     [![GitHub forks](https://img.shields.io/github/forks/bhagatabhijeet/chalkyourteam)](https://github.com/bhagatabhijeet/chalkyourteam/network)
//         [![GitHub stars](https://img.shields.io/github/stars/bhagatabhijeet/chalkyourteam)](https://github.com/bhagatabhijeet/chalkyourteam/stargazers)