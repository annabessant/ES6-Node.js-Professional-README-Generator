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
    }

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
    }
  
           // Table of Contents STOPPED ? I     nstallation is correct below
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
    }


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
    }

    ])
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
