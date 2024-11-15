let form = document.querySelector('.formulario')

let mail = document.querySelector('.mail')

let contrasena = document.querySelector('.contrasena')

form.addEventListener("submit", function(evento){
    evento.preventDefault()
    
    let errors = false

    if (mail.value === ""){
        alert("Por favor complete el campo email")
        errors = true
    }
    if (contrasena.value === ""){
        alert("Por favor complete el campo contraseña")
        errors = true
    }

    if (!errors) this.submit()
})