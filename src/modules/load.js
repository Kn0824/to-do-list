import Actions from "./misc";
import Project from "./project";
import Item from "./item";
const action = new Actions;

export default function loadSite() {
    //Load page and set default project
    const body = document.querySelector('body');

    const sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");
    
    const main = document.createElement("div");
    main.classList.add("main");
    main.style.display = "flex";
    main.style.flexDirection = "column";

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("addButtonContainer");

    body.appendChild(sidebar);
    body.appendChild(buttonContainer);
    body.appendChild(main);

    const allProjects = new Project("All_Projects");

    const currentProject = document.createElement("div");
    currentProject.setAttribute('id', 'currentProject');
    currentProject.textContent = allProjects.getName();
    body.appendChild(currentProject);
    currentProject.style.display = "none";

    const addButton = document.createElement("button");
    addButton.classList.add("addButton");
    buttonContainer.appendChild(addButton);
    addButton.textContent = "Add Item";
    addButton.addEventListener('click', function() {
        action.openForm();
    })
    //Create form in the DOM and hide for later use
    const form = document.createElement("form");
    form.classList.add("formlist");
    form.setAttribute("id", "newList");
    form.setAttribute("method", "post");
    form.setAttribute("action", "#");

    createInput("Title:", 'title', form, 'text');
    createInput("Description:", 'description', form, 'text');
    createInput("Due Date:", 'dueDate', form, 'date');

    let priority = document.createElement('label');
    priority.setAttribute('for', 'priority');
    priority.textContent = "Priority:";
    let prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('id', 'priority');
    prioritySelect.setAttribute('name', 'priority');
    let option1 = document.createElement('option');
    option1.setAttribute('value', 'lowPriority')
    option1.textContent = "Low";
    let option2 = document.createElement('option');
    option2.setAttribute('value', 'mediumPriority')
    option2.textContent = "Medium";
    let option3 = document.createElement('option');
    option3.setAttribute('value', 'highPriority')
    option3.textContent = "High";
    prioritySelect.appendChild(option1);
    prioritySelect.appendChild(option2);
    prioritySelect.appendChild(option3);
    form.appendChild(priority);
    form.appendChild(prioritySelect);

    let submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.textContent = "Submit";
    submit.addEventListener('click', event => {
        event.preventDefault();
        const currentProjectName = document.getElementById("currentProject").textContent;
        let item = new Item(document.getElementById('title').value, document.getElementById('description').value, 
        document.getElementById('dueDate').value, document.getElementById('priority').value, currentProjectName);
        let existingItems = JSON.parse(localStorage.getItem(currentProjectName)) || [];
        existingItems.push({
            title: item.title,
            description: item.description,
            dueDate: item.dueDate,
            priority: item.priority
        });
        localStorage.setItem(currentProjectName, JSON.stringify(existingItems));
        if(currentProjectName != "All_Projects") {
            let allProjectsItems = JSON.parse(localStorage.getItem("All_Projects")) || [];

            allProjectsItems.push({
                title: item.title,
                description: item.description,
                dueDate: item.dueDate,
                priority: item.priority
            });

            localStorage.setItem("All_Projects", JSON.stringify(allProjectsItems));
        }
        action.closeForm();
    });
    form.appendChild(submit);

    let close = document.createElement('button');
    close.setAttribute('type', 'button');
    close.textContent = "Cancel";
    close.addEventListener('click', function() {
        action.closeForm();
    });
    form.appendChild(close);

    let change = document.createElement('button');
    change.setAttribute('type', 'button');
    change.textContent = "Add Project";
    change.addEventListener('click', function() {
        action.switchForm();
    });
    form.appendChild(change);

    body.appendChild(form);
    form.style.display = 'none';

    //Create Add Project form and add to DOM and hide
    const projectForm = document.createElement('form');
    projectForm.classList.add("formlist");
    projectForm.setAttribute('id', 'newProject');
    projectForm.setAttribute('method', 'post');
    projectForm.setAttribute('action', '#');
    createInput('Project Title(No Spaces):', 'projectTitle', projectForm, 'text');

    let projectSubmit = document.createElement('button');
    projectSubmit.setAttribute('type', 'submit');
    projectSubmit.textContent = "Submit";
    projectSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        let newProj = new Project(document.getElementById('projectTitle').value);
        action.closeForm();
    });
    projectForm.appendChild(projectSubmit);

    let closeProject = document.createElement('button');
    closeProject.setAttribute('type', 'button');
    closeProject.textContent = "Cancel";
    closeProject.addEventListener('click', function() {
        action.closeForm();
    });
    projectForm.appendChild(closeProject);

    let changeBack = document.createElement('button');
    changeBack.setAttribute('type', 'button');
    changeBack.textContent = "Add Item";
    changeBack.addEventListener('click', function() {
        action.switchForm();
    });
    projectForm.appendChild(changeBack);

    projectForm.style.display = 'none';
    body.appendChild(projectForm);

}

function createInput(text, id, form, type) {
    let label = document.createElement('label');
    label.setAttribute('for', id)
    label.textContent = text;
    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', id);
    input.setAttribute('id', id);
    form.appendChild(label);
    form.appendChild(input);
}