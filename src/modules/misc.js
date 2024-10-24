import Project from "./project";
import Item from "./item.js";

export default class Actions {
    openForm() {
        const form = document.getElementById("newList");
        form.style.display = 'block';
    }
    switchForm() {
        const forms = document.querySelectorAll("form");
        forms.forEach(form => {
            if(form.style.display == 'none') {
                form.style.display = 'block';
            }
            else {
                form.style.display = 'none';
            }
        });
    }
    closeForm() {
        const forms = document.querySelectorAll("form");
        forms.forEach(form => {
            form.style.display = 'none';
            form.reset();
        });
    }
}