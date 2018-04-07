export const addNewBugToList = (type, description) => {
    if (type === 'high') {
        createElements(type, description);
    }
    if (type === 'medium') {
        createElements(type, description);
    }
    if (type === 'low') {
        createElements(type, description);
    }
}

const createElements = (type, description) => {
    const targetColumn = document.getElementById(type);
    if (document.getElementById('no-bugs-' + type)) {
        targetColumn.removeChild(targetColumn.firstElementChild);
    }
    targetColumn.appendChild(document.createElement('p'));
    targetColumn.lastElementChild.setAttribute('class', 'control has-icons-left bug');
    targetColumn.lastElementChild.innerHTML = description +
        '<button data-type="button-left"><img src="/img/arrowLeft.png" width=16px height=16px data-type="button-left"></button>' +
        '<button data-type="button-right"><img src="/img/arrowRight.png" width=16px height=16px data-type="button-right"></button>';
}

export const setEventOnArrowButtons = () => {
    const columns = document.querySelectorAll('div[data-level]');
    columns.forEach((column) => {
        column.addEventListener('click', (e) => {
            const source = e.currentTarget.dataset.level;
            let direction;
            if (e.target.dataset.type === 'button-left') {
                direction = 'left';
                moveBugs(source, direction, e.currentTarget, e.target);
            }
            if (e.target.dataset.type === 'button-right') {
                direction = 'right';
                moveBugs(source, direction, e.currentTarget, e.target);
            }
        });
    });
}

const moveBugs = (sourceLevel, direction, targetedColumn, target) => {
    let cache;
    const allBugsInColumn = Array.from(targetedColumn.children);
    allBugsInColumn.forEach((bug) => {
        if (bug.contains(target)) {
            cache = bug.innerText;
            console.log(cache);
        }
        if (sourceLevel === 'high') {
            if (direction === 'right') {
                targetedColumn.removeChild(bug);
                createElements('medium', cache);
            }
        }
        if (sourceLevel === 'medium') {
            if (direction === 'right') {
                targetedColumn.removeChild(bug);
                createElements('low', cache);
            } else {
                targetedColumn.removeChild(bug);
                createElements('high', cache);
            }
        }
        if (sourceLevel === 'low') {
            if (direction === 'left') {
                targetedColumn.removeChild(bug);
                createElements('medium', cache);
            }
        }
    });
}