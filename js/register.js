const form = document.querySelector('#registerForm');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const terminos = document.querySelector(".terminos");
const bot = document.querySelector(".boton")

form.addEventListener('submit', function(event) {
    const email = document.querySelector('#email').value;
    if (email === '') {
        emailError.innerText = "Por favor complete el campo";
        event.preventDefault();
    } 
    const password = document.querySelector('#password').value;
    if (password === '') {
        passwordError.innerText = "Por favor complete el campo";
        event.preventDefault();
    } 
});
bot.addEventListener("click", function(event){
    if (!terminos){
        alert("Tenes que aceptar condiciones")
        event.preventDefault();
    }
})




