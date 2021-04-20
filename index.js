const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "myteam.html");

const render = require("./library/html");
const Employee = require("./library/employee");
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const { fstat } = require("node:fs");
const myteamArr = []

function employeeQs() {

    inquirer.prompt([
        {
        type: "input",
        message: "Please enter the name of the team member you would like to add",
        name:  "answerName"
    },
    {
        type: "input",
        message: "Please enter their Employee ID Number",
        name:  "answerID"
    },
    {
        type: "input",
        message: "Please enter their email address",
        name:  "answerEmail"
    },
    {
        type: "list",
        message: "Please select their role here",
        name:  "answerName",
        choices: ["Intern", "Engineer", "Manager"]
    },

    ]). then(function(answers) {
        if (answers.answerRole === "Engineer") {
            engineerQs(answers);
        } else if (answers.answerRole === "Intern") {
            internQs(answers);
        } else {
            managerQs(answers);
        }

        })
    }

    function engineerQs(baseAnswers) {
        inquirer.prompt ([
            {
                type: "input",
                message: "What is their Github Username?",
                name: "answerGithub",
            },
            {
                type: "confirm",
                message: "Complete. Would you like to add another user?",
                name: "answerAddAnother",
            },
        ]).then(function(answers) {
            const newEngineer = new Engineer(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answerRole);
            myteamArr.push(newEngineer);
            if (answers.answerAddAnother === true) {
                employeeQs()
            } else {
                buildTeam();
                console.log("rendered!")
            }

        })
    }

    function internQs(baseAnswers) {
        inquirer.prompt ([
            {
                type: "input",
                message: "Where did you go to school?",
                name: "answerSchool",
            },
            {
                type: "confirm",
                message: "Complete. Would you like to add another user?",
                name: "answerAddAnother",
            },
        ]).then(function (answers) {
            const newIntern = new Intern(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answerRole);
            myteamArr.push(newIntern);
            if (answers.answerAddAnother === true) {
                employeeQs()
            } else {
                buildTeam();
                console.log("rendered!")
            }

        })
    } 

    function managerQs(baseAnswers) {
        inquirer.prompt ([
            {
                type: "input",
                message: "What is their Github Username?",
                name: "answerGithub",
            },
            {
                type: "confirm",
                message: "Complete. Would you like to add another user?",
                name: "answerAddAnother",
            },
        ]).then(function(answers) {
            const newEngineer = new Manager(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answerRole);
            myteamArr.push(newEngineer);
            if (answers.answerAddAnother === true) {
                employeeQs()
            } else {
                buildTeam();
                console.log("rendered!")
            }

        })
    }

    function buildTeam() {
        if(!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(myteamArr), "utf-8");
    }

    employeeQs;