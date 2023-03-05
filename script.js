const inputs = document.querySelectorAll('input');
const pswd = document.querySelector('#pswd');
const checkPswd = document.querySelector('#checkpswd');
const pswdError = document.querySelector('#pswderror');
let pswdBool = false;

pswd.addEventListener('change', () => {
    if (pswd.value !== '') {
        pswdBool = true;
    } else {
        pswdBool = false;
    }
});

checkPswd.addEventListener('change', () => {
    if (checkPswd.value === '') {
        pswdError.textContent = '';
    } else if (pswdBool === true && pswd.value !== checkPswd.value) {
        pswdError.textContent = '*error passwords do not match';
    } else {
        pswdError.textContent = '';
    }
});

inputs.forEach(input => {
    input.addEventListener('focusout', ()  => {
        if (input.value === '') {
            input.classList = '';
        } else {
            input.classList = 'triggered';
        }
    });
});