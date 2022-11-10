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
/*Now it is time to type a bunch of nonsense again. I should probably go to bed, but vim is fun
  OK, let's type so more because being able to touch type is pretty cool as well. I guess I have learned a lot of cool skills doing the Odin Project. I am very thankful that I found the course. I must continue to do open-sourced education after I complete this course. I really would like to become more proficient in java scrit. I intend to acomplish that much */
