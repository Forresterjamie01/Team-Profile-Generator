const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../src templates");

const render = employees => {
    const html = [];


html.push(...employees
    .filter(employee => employee.getRole()=== "Manager")
    .map(manager => renderManger(manager))
    );
html.push(...employees
    .filter(employee => employee.getRole()=== "Engineer")
    .map(manager => renderEngineer(engineer))
    );
html.push(...employees
    .filter(employee => employee.getRole()=== "Intern")
    .map(manager => renderIntern(intern))
    );

    return renderMain(html.join(""));

};

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "phonenumber", manager.getPhoneNumber());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "github", manager.getGitHub());
    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "school", manager.getSchool());
    return template;
};


