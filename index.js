const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
        //Title
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? (Required):",
        },

        // Description 
        
        {
            type: "input",
            name: "description",
            message: "What is the description of your project? (Required):",
        },
  
        // Table of Contents 
        {
            type: "input",
            name: "table of content",
            message: "Do you want to add table of content? (optional):",
        },

        // Installation     
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? (Required):",
        },


        // License https://choosealicense.com/licenses/  
        {
            type: "list",
            name: "license",
            message: "Please let other developers know what they can and cannot do with your project by choosing a license (Required):",
            choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT"],
            filter(val) {
                return val;
            },
        },

        // Contributors     
        {
            type: "input",
            name: "contributors",
            message: "Would like other developers to contribute? (Required):",
        },


        //  Tests     
        {
            type: "input",
            name: "testing",
            message: "Please provide guidelines for testing your application (Required):",
        },

        // Questions (When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile)     
        {
            type: "input",
            name: "github",
            message: "Please leave your GitHub username for any questions (Required):",
        },

        {
            type: "input",
            name: "usage",
            message: "Please provide usage instructions for your app? (Required):",
        },
    ];

// function to create README file
function writeToFile(fileName = "ReadME.md", text) {
    fs.writeFile(fileName, text, (err) =>
    err ? console.log (err): console.log("done")
    );
}

// to activate the programme
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markedDown = generateMarkdown(answers);
        const text = (Object.values(markedDown)).join("");
        console.log(text);
        let current = path.resolve();
        fs.mkdir(`./generated`, { recursive: true }, (err) => {
            if (err) throw err;
        });
        writeToFile(`./generated/README.md`, text);
    });
}
init();




