const form = document.querySelector('.login-form')

form.addEventListener('submit', onLoginForm)

function onLoginForm(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements
    const email = formElements.email.value;
    const password = formElements.password.value

    const formData = {
        email: email,
        password: password,
    }
    console.log(formData)
    form.reset();

    if (email === '' || password === '') {
        alert('Пусті поля')
        form.reset();
        return;
    }
}


