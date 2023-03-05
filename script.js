const inputs = document.querySelectorAll('input');
const pswd = document.querySelector('#pswd');
const checkPswd = document.querySelector('#checkpswd');
const pswdError = document.querySelector('#match');
const submit = document.querySelector('#submit');
let matchBool = false;

//prevent submit button from submitting anything
submit.addEventListener('click', (e) => {
    e.preventDefault();
})

//password check
pswd.addEventListener('focusout', () => {
    if (pswd.value !== '') {
        matchBool = true;
    } else {
        matchBool = false;
    }
});

//password check error message
checkPswd.addEventListener('focusout', () => {
    if (checkPswd.value === '') {
        pswdError.textContent = '';
    } else if (matchBool === true && pswd.value !== checkPswd.value) {
        pswdError.textContent = '*error passwords do not match';
    } else {
        pswdError.textContent = '';
    }
});

pswd.addEventListener('focusout', () => {
    if (checkPswd.value !== '' && pswd.value === checkPswd.value) {
        pswdError.textContent = '';
    }
});

//form validation
inputs.forEach(input => {
    input.addEventListener('focusout', ()  => {
        if (input.value === '') {
            input.classList = '';
        } else {
            input.classList = 'triggered';
        }
    });
});