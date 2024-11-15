let form = document.querySelector(".formu");
let comentario = document.querySelector(".comentario");
let errorMessage = document.querySelector(".error-message");

fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    
})
.catch(function(error){
    console.log('El error es: '+ error);
})


form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (comentario.value === "") {
        errorMessage.innerText = "Campo obligatorio";
        errorMessage.style.display = "block";
    } else if (comentario.value.length < 3) {
        errorMessage.innerText = "Mínimo 3 caracteres";
        errorMessage.style.display = "block";
    } else {
        this.submit();
    }
});


