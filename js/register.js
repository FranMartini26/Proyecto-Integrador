const form = document.querySelector('#registerForm');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const terminos = document.querySelector(".terminos");
const bot = document.querySelector(".boton")

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = false

    if(!terminos.checked){
        alert("Tenes que aceptar condiciones");
        errors = true
    }

    const email = document.querySelector('#email').value;
    if (email === '') {
        emailError.innerText = "Por favor complete el campo";
        errors = true
    } else{
        emailError.innerText = ""
    }
    const password = document.querySelector('#password').value;
    if (password === '') {
        passwordError.innerText = "Por favor complete el campo";
        errors = true
    } else{
        passwordError.innerText = ""
    }

    if (!errors) this.submit()
});




