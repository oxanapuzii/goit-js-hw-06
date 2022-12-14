const inputEl = document.querySelector('#validation-input');
console.log(inputEl)

inputEl.addEventListener("blur", validCheck)

function validCheck(event) {
    if (event.currentTarget.value.length === Number(inputEl.getAttribute('data-length'))) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');        
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}