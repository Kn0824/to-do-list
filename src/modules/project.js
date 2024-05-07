import UI from "./misc";
const misc = new UI;

export default class Project {
    constructor(name) {
        this.name = name;
        const sidebar = document.querySelector('.sideBar');
        const listContainer = document.querySelector('.listContainer');

        const createListForm = document.querySelector('#newList');
        const createProject = document.querySelector('#newProject');

        const projectButton = document.createElement('button');
        projectButton.textContent = this.name;
        sidebar.appendChild(projectButton);

        const projectPage = document.createElement("div");
        projectPage.classList.add("pageHolder");

        this.listHolder = document.createElement("div");
        this.listHolder.classList.add("page");

        createListForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const title = document.getElementById('itemTitle').value;
            const description = document.getElementById('itemDescription').value;
            const date = document.getElementById('dueDate').value;
            const priority = document.getElementById('priority').value;
            this.newItem(title, description, date, priority);
            const listForm = document.querySelector(".formPopup");
            listForm.style.display = "none";
        });

        const addButton = document.createElement("button");
        addButton.classList.add("addButton");
        addButton.addEventListener('click', function() {
            misc.listForm();

        });
        addButton.textContent = "+ Add Item";

        projectPage.appendChild(this.listHolder);
        projectPage.appendChild(addButton);

        listContainer.appendChild(projectPage);

        projectButton.addEventListener('click', function() {
            misc.clearPage();
            projectPage.style.display = 'block';
        });
    }

    newItem(title, desc, date, priority) {
        let newItem = document.createElement("div");
        newItem.classList.add("listItem");

        let checkboxContainer = document.createElement("div");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let checkboxName = document.createElement("label");
        checkboxName.textContent = title;

        let detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        detailsButton.addEventListener('click', () => {
            this.displayDetails(desc, date, priority);
        });

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(checkboxName);
        newItem.appendChild(checkboxContainer);
        newItem.appendChild(detailsButton);

        this.listHolder.appendChild(newItem);
    }

    displayDetails(desc, date, priority) {
        console.log("working");
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add('detailsDisplay');

        const descriptionDiv = document.createElement("div");
        const descriptionTitle = document.createElement("div");
        descriptionTitle.textContent = "Description: ";
        const descriptionContent = document.createElement("div");
        descriptionContent.textContent = desc;
        descriptionDiv.appendChild(descriptionTitle);
        descriptionDiv.appendChild(descriptionContent);

        const dateDiv = document.createElement("div");
        const dateTitle = document.createElement("div");
        dateTitle.textContent = "Due Date:";
        const dateContent = document.createElement("div");
        dateContent.textContent = date;
        dateDiv.appendChild(dateTitle);
        dateDiv.appendChild(dateContent);

        const priorityDiv = document.createElement("div");
        const priorityTitle = document.createElement("div");
        priorityTitle.textContent = "Title:";
        const priorityContent = document.createElement("div");
        priorityContent.textContent = priority;
        priorityDiv.appendChild(priorityTitle);
        priorityDiv.appendChild(priorityContent);

        detailsDiv.appendChild(descriptionDiv);
        detailsDiv.appendChild(dateDiv);
        detailsDiv.appendChild(priorityDiv);

        const body = document.querySelector("body");
        body.appendChild(detailsDiv);
        detailsDiv.style.zIndex = "9999";

        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.addEventListener('click', function() {
            detailsDiv.remove();
        });

        detailsDiv.appendChild(closeButton);
    }
}