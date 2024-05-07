export default class UI {
    clearPage() {
        const listContainer = document.querySelector('.listContainer');
        const list = listContainer.querySelectorAll('.pageHolder');
        list.forEach(item => {
            item.style.display = "none";
        });
    }
    
    listForm() {
        const listForm = document.querySelector(".formPopup");
        listForm.style.display = "block";
    
        const newList = listForm.querySelector("#newList");
        newList.style.display = "block";
        const newProject = listForm.querySelector("#newProject");
        
        const switchList = listForm.querySelector(".switchList");
        switchList.addEventListener('click', function() {
            newList.style.display = "block";
            newProject.style.display = "none";
        });
    
        const switchProject = listForm.querySelector(".switchProject");
        switchProject.addEventListener('click', function() {
            newList.style.display = "none";
            newProject.style.display = "block";
        });
    }
}

