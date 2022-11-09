const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

let days;
const choice = select.value;

select.addEventListener('change', findDays);

function findDays () {
    // add conditional here
    days = 31;
    if (choice === 'febuary') {
        days = 28;
    } else if (choice === 'april' || choice ==='june' ||
    choice === 'september' || choice === 'november') {
        days = 30;
    }

    createCalendar(days, choice);
};

function createCalendar(days, choice) {
    list.innerHTML = '';
    h1.textContent = choice;
    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

createCalendar(days, choice);