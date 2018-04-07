import { addBugs } from './bugs/form';
import { setEventOnArrowButtons } from './bugs/lists';

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded. Ready to go!");
    addBugs();
    setEventOnArrowButtons();
});