import { addNewBugToList } from './lists';

export const addBugs = () => {
    const bugType = document.getElementById('bug-type');
    const bugDescription = document.getElementById('bug');
    const bugAddButton = document.getElementById('bug-add');
    bugAddButton.addEventListener('click', (e) => {
        addNewBugToList(bugType.value, bugDescription.value);
    });
}