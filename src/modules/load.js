import UI from "./misc";
import Project from "./project";

const misc = new UI;

export default function loadSite() {
    const body = document.querySelector('body');

    const header = document.createElement('div');
    header.textContent = "To-Do List";
    header.classList.add('header');

    const sideBar = document.createElement('div');
    sideBar.classList.add('sideBar');

    /*const homeButton = document.createElement('button');
    homeButton.classList.add('home');
    homeButton.textContent = "Home";
    homeButton.addEventListener('click', loadHome);

    const dayButton = document.createElement('button');
    dayButton.classList.add('day');
    dayButton.textContent = "Day";
    dayButton.addEventListener('click', loadDay);

    const weekButton = document.createElement('button');
    weekButton.classList.add('week');
    weekButton.textContent = "Week";
    weekButton.addEventListener('click', loadWeek); */

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');
    projectsContainer.textContent = "Projects";

    /*sideBar.appendChild(homeButton);
    sideBar.appendChild(dayButton);
    sideBar.appendChild(weekButton);*/

    const listContainer = document.createElement('div');
    listContainer.classList.add('listContainer');

    const tabBar = document.createElement('button');
    const tabImage = document.createElement('svg');
    tabBar.classList.add('tab-bar');
    tabImage.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="black"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>';
    tabBar.appendChild(tabImage);

    body.appendChild(header);
    body.appendChild(sideBar);
    body.appendChild(listContainer);
    body.appendChild(tabBar);

    const home = new Project("Home");
    const day = new Project("Day");
    const week = new Project("Week");
    sideBar.appendChild(projectsContainer);

    misc.clearPage();


    const homePage = document.createElement('div');
    homePage.classList.add('homePage');
    listContainer.appendChild(homePage);

    /*const createListForm = document.querySelector('#newList');
    const createProject = document.querySelector('#newProject');

    createListForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('itemTitle').value;
        const description = document.getElementById('itemDescription').value;
        const date = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;
        let list = new List(title, description, date, priority);
        const listForm = document.querySelector(".formPopup");
        listForm.style.display = "none";
    });*/

}