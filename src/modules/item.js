import { format } from "date-fns";
export default class Item {
    constructor(title, description, dueDate, priority, projectName) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectName = projectName;
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item");
        itemContainer.style.display = "flex";
        itemContainer.style.justifyContent = "space-evenly";

        const itemTitle = document.createElement("div");
        itemTitle.textContent = title;

        const itemDesc = document.createElement("div");
        itemDesc.textContent = description;
        itemDesc.style.display = "none";

        const itemDate = document.createElement("div");
        let formattedDate = new Date(dueDate);
        itemDate.textContent = 'Due:' + format(formattedDate, 'yyyy-MM-dd');

        const itemPriority = document.createElement("div");
        itemPriority.textContent = priority;
        itemPriority.style.display = "none";

        const expandButton = document.createElement('button');
        expandButton.textContent = "Expand";
        expandButton.addEventListener('click', () => {
            this.expandItem();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', () => {
            this.deleteItem(itemContainer);
        });

        itemContainer.appendChild(itemTitle);
        itemContainer.appendChild(itemDesc);
        itemContainer.appendChild(itemDate);
        itemContainer.appendChild(itemPriority);
        itemContainer.appendChild(expandButton);
        itemContainer.appendChild(deleteButton);

        const main = document.querySelector('.main');
        main.appendChild(itemContainer);
    }

    expandItem() {
        const expandedItem = document.createElement("div");
        expandedItem.classList.add("expandedItem");
        expandedItem.style.display = "flex";
        expandedItem.style.flexDirection = "column";
        expandedItem.style.justifyContent = "space-evenly";

        const title = document.createElement("div");
        title.textContent = this.title;

        const description = document.createElement("div");
        description.textContent = "Description:" + this.description;

        const dueDate = document.createElement("div");
        let formattedDate = new Date(this.dueDate);
        dueDate.textContent = 'Due:' + format(formattedDate, 'yyyy-MM-dd');


        const priority = document.createElement("div");
        priority.textContent = "Priority" + this.priority;

        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.addEventListener('click', () => {
            this.deleteItem(expandedItem);
        });

        expandedItem.appendChild(title);
        expandedItem.appendChild(description);
        expandedItem.appendChild(dueDate);
        expandedItem.appendChild(priority);
        expandedItem.appendChild(closeButton);

        const body = document.querySelector("body");
        body.appendChild(expandedItem);
    }

    deleteItem(parent) {
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        parent.remove();

        const currentProject = this.projectName; 
        console.log(currentProject);
        
        const storedItems = JSON.parse(localStorage.getItem(currentProject)) || [];
        const allProjectItems = JSON.parse(localStorage.getItem("All_Projects")) || [];

        const itemTitle = this.title;

        const updatedItems = storedItems.filter(item => item.title !== itemTitle);
        localStorage.setItem(currentProject, JSON.stringify(updatedItems));

        const updatedAllItems = allProjectItems.filter(item => item.title !== itemTitle);
        localStorage.setItem("All_Projects", JSON.stringify(updatedAllItems));
    }
}