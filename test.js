const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
	const choice = select.value;

	let days = 31;
	if (choice === 'february') {
		days = 28;
	} else if (choice === 'april' || choice === 'june' || choice === 'september' || choice === 'november') {
		days = 30;
	}

	createCalander(days, choice);
});

function createCalander(days, choice) {
	let choiceName = choice.charAT(0).toUpperCase() + choice.slice(1);
	list.innerHTML = '';
	h1.textContent = choiceName;
	for (let i = 1; i <= days; i++) {
		const listItem = document.createElement('li');
		listItem.textContent = i;
		list.appendChild(listItem);
	}
}

