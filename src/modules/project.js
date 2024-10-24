import Item from "./item";
import Actions from "./misc";

export default class Project {
    constructor(name) {
        this.name = name;
        const sideBar = document.querySelector(".sidebar");
        let button = document.createElement('button');
        button.textContent = name;
        sideBar.appendChild(button);
        button.addEventListener('click', () => {
            this.loadProject();
        });
        button.classList.add("project");
        button.setAttribute('id', name);
    }
    loadProject() {
        const main = document.querySelector(".main");

        while(main.firstChild) {
            main.removeChild(main.firstChild);
        }

        let currentProject = this.name;
        
        const storedItems = JSON.parse(localStorage.getItem(currentProject)) || [];
        storedItems.forEach(item => {
            new Item(item.title, item.description, item.dueDate, item.priority);
        });
        currentProject = document.getElementById("currentProject");
        currentProject.textContent = this.name;
    }
    getName() {
        return this.name;
    }
} 