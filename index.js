const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// //To store answer
// let answerObject;

//To create README content using https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

// function promptUser() {
//     return inquirer
//     .prompt([
const questions = [
        //Title
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? (Required):",
            // validate: titleInput => {
            //     if (titleInput) {
            //         return true;
            //     }
            //     else {
            //         console.log("This is a required information. Please add your project title");
            //         return false;
            //     }
            // }
        },

        // Description 
        
        {
            type: "input",
            name: "description",
            message: "What is the description of your project? (Required):",
            // validate: descriptionInput => {
            //     if (descriptionInput) {
            //         return true;
            //     }
            //     else {
            //         console.log("This is a required information. Please add your project description");
            //         return false;
            //     }
            // }
        },
  
        // Table of Contents 
        {
            type: "input",
            name: "table of content",
            message: "Do you want to add table of content? (optional):",
            // validate: installationInput => {
            //     if (tableOfContentInput) {
            //         return true;
            //     }
            //     else {
            //         console.log("This infomation is optional. In case you still want to add it");
            //         return false;
            //     }
            // }
        },

        // Installation     
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? (Required):",
            // validate: installationInput => {
            //     if (installationInput) {
            //         return true;
            //     }
            //     else {
            //         console.log("This is a required information. Please provide installation steps");
            //         return false;
            //     }
            // }
        },


        // License https://choosealicense.com/licenses/  
        {
            type: "list",
            name: "license",
            message: "Please let other developers know what they can and cannot do with your project by choosing a license (Required):",
            choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License"]
            filter(val) {
                return val;
            },
            // validate: installationInput => {
            //     if (licenseInput) {
            //         return true;
            //     }
            //     else {
            //         console.log("This is a required information. Please select the project license");
            //         return false;
            //     }
            // }
        },

        // Contributors     
        {
            type: "input",
            name: "contributors",
            message: "Would like other developers to contribute? (Required):",
            // validate: contributorsInput => {
            //     if (contributorsInput) {
            //         return true;
            //     }
            //     else {
            //         console.log("This is a required information. Please leave a message for potential contributors");
            //         return false;
            //     }
            // }
        },


        //  Tests     
        {
            type: "input",
            name: "testing",
            message: "Please provide guidelines for testing your application (Required):",
            // validate: testingInput => {
            //     if (testingInput) {
            //         return true;
            //     }
            //     else {
            //         console.log("This is a required information. Please provide guidelines for testing your application");
            //         return false;
            //     }
            // }
        },

        // Questions (When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile)     
        {
            type: "input",
            name: "github",
            message: "Please leave your GitHub username for questions, if any (Required):",
            // validate: contactInput => {
            //     if (contactInput) {
            //     return true;
            //     }
            //     else {
            //         console.log("This is a required information. Please leave your GitHub username for follow-up questions");
            //         return false;
            //     }
            // }
        },
    ]);

// function to create README file
function writeToFile(fileName = "README.md", text) {
    fs.writeFile(fileName, text, (err) =>
    err ? console.log (err): console.log(done)
    );
}

    // .then((answers) => {
    //     // Save answers
    //     answersObject = answers;
    //     // Make a file, including license badge from https://shields.io/category/license // https://shields.io/category/license
    //     fs.writeFile(
    //         `./${answersObject.title}-README.md`,
        
    //         # ${answersObject.title}
    //     [![License: ${answersObject.license}](![Weblate component license](https://img.shields.io/weblate/l/Professional%20REDAME/License?style=social))]
        
    //     **Description**: ${answersObject.description}

    //     **Deployment links**: n/a

    //     ## Table of Counts
        
    //     * [Installation](#installation)
        // * [Usage](#usage)
        // * [Creadits](#credits)
        // * [License](#license)

        // ### Installation
        // ${answersObject.installation}

        // ### License
        // ${answersObject.license}

        // ### Contributors
        // ${answersObject.contributors}

        // ### Testing
        // ${answersObject.testing}

        // ### Questions
    //     Please [email] (${answersObject.email}) me if you have any follow-up questions.
    //     Alternatively, you can contact me via [GitHub] (https://github.com/${answersObject.github}) profile. 
    // }
    // )


// writeFile(file: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, options: fs.WriteFileOptions, callback: fs.NoParamCallback): void

// When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer.

// When file is a file descriptor, the behavior is similar to callingfs.write() directly (which is recommended). See the notes below on using a file descriptor.

// The encoding option is ignored if data is a buffer.

// The mode option only affects the newly created file. See open for more details.

// import { writeFile } from 'fs';
// import { Buffer } from 'buffer';

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
// If options is a string, then it specifies the encoding:

// import { writeFile } from 'fs';

// writeFile('message.txt', 'Hello Node.js', 'utf8', callback);
// // It is unsafe to use fs.writeFile() multiple times on the same file without waiting for the callback. For this scenario, createWriteStream is recommended.

// // Similarly to fs.readFile - fs.writeFile is a convenience method that performs multiple write calls internally to write the buffer passed to it. For performance sensitive code consider using createWriteStream.

// // It is possible to use an AbortSignal to cancel an fs.writeFile(). Cancelation is "best effort", and some amount of data is likely still to be written.

// import { writeFile } from 'fs';
// import { Buffer } from 'buffer';

// const controller = new AbortController();
// const { signal } = controller;
// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// writeFile('message.txt', data, { signal }, (err) => {
//   // When a request is aborted - the callback is called with an AbortError
// });
// // When the request should be aborted
// controller.abort();
// Aborting an ongoing request does not abort individual operating system requests but rather the internal buffering fs.writeFile performs.

// @since — v0.1.29








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
