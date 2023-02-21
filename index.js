const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//To store answer
let answerObject;

//To create README content using https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

function promptUser() {
    return inquirer
    .prompt([
        
        //Title
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? (Required):",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log("This is a required information. Please add your project title");
                    return false;
                }
            }
        },

        // Description 
        
        {
            type: "input",
            name: "description",
            message: "What is the description of your project? (Required):",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log("This is a required information. Please add your project description");
                    return false;
                }
            }
        },
  
        // Table of Contents 
        {
            type: "input",
            name: "table of content",
            message: "Do you want to add table of content? (optional):",
            validate: installationInput => {
                if (tableOfContentInput) {
                    return true;
                }
                else {
                    console.log("This infomation is optional. In case you still want to add it");
                    return false;
                }
            }
        },

        // Installation     
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? (Required):",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                }
                else {
                    console.log("This is a required information. Please provide installation steps");
                    return false;
                }
            }
        },


        // License https://choosealicense.com/licenses/   
        {
            type: "list",
            name: "license",
            message: "Please let other developers know what they can and cannot do with your project by choosing a license (Required):",
            choices: [GNU AGPLv3, GNU GPLv3, GNU LGPLv3, Mozilla Public License 2.0, Apache License 2.0, MIT License, Boost Software License 1.0, The Unlicense]
            validate: installationInput => {
                if (licenseInput) {
                    return true;
                }
                else {
                    console.log("This is a required information. Please select the project license");
                    return false;
                }
            }
        },

        // Contributors     
        {
            type: "input",
            name: "contributors",
            message: "Would like other developers to contribute? (Required):",
            validate: contributorsInput => {
                if (contributorsInput) {
                    return true;
                }
                else {
                    console.log("This is a required information. Please leave a message for potential contributors");
                    return false;
                }
            }
        }


        //  Tests     
        {
            type: "input",
            name: "testing",
            message: "Please provide guidelines for testing your application (Required):",
            validate: testingInput => {
                if (testingInput) {
                    return true;
                }
                else {
                    console.log("This is a required information. Please provide guidelines for testing your application");
                    return false;
                }
            }
        },

        // Questions (When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile)     
        {
            type: "input",
            name: "github",
            message: "Please leave your GitHub username for questions, if any (Required):",
            validate: contactInput => {
                if (contactInput) {
                return true;
                }
                else {
                    console.log("This is a required information. Please leave your GitHub username for follow-up questions");
                    return false;
                }
            }
        }
    ])
    .then 
}









// // array of questions for user
// const questions = [
// ];
// // function to write README file
// function writeToFile(fileName, data) {
// }
// // function to initialize program
// function init() {
// }
// // function call to initialize program
// init();
