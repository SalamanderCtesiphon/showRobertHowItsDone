const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
	const choice = select.value; 

	// add switch statement
	switch (choice) {
		case 'White':
			update('white', 'black');
			break;	
		case 'Black':
			update('black', 'white');
			break;
		case 'Purple':
			update('purple', 'white')'
			break;
		case 'Yellow':
			update('yellow', 'black');
			break;
		case 'Psychedelic':
			update('lime', 'purple');
			break;
});

function update(bgColor, textColor) {
	html.style.backgroundColor = bgColor;
	html.style.color - textColor;
}

