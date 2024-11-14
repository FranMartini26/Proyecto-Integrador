let boton = document.querySelector('.boton')

let mail = document.querySelector('.mail')

boton.addEventListener("click", function(evento){
    if (mail.value == ""){
        evento.preventDefault()
        alert( "Por favor complete el campo email")
    }
})

let contrasena = document.querySelector('.contrasena')

boton.addEventListener("click", function(evento){
    if (contrasena.value == ""){
        evento.preventDefault()
        alert("Por favor complete el campo contraseña")
    }
})