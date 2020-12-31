const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Show Error
function showError(input, message) {
	const formControl = input.parentElement;

	const errorMessage = formControl.querySelector('small');

	errorMessage.innerHTML = message;
	formControl.classList.add('error');
}

function isEmpty(inputArr) {
	inputArr.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${input.dataset.title} cannot be empty`);
		}
	});
}

// Validate email
function checkEmail(input) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(String(input.value).toLowerCase())) {
		showError(input, 'Looks like this is not an email');
	}
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault();

	isEmpty([firstname, lastname, email, password]);
	checkEmail(email);
});
