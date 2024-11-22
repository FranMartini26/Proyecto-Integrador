let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let RecetaId = queryStringObj.get('id'); 

fetch(`https://dummyjson.com/recipes/${RecetaId}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (receta) {
        document.querySelector(".foto-Receta").src = receta.image;
        document.querySelector(".Name-Receta").innerText = receta.name;
        document.querySelector(".Instrucciones-Receta").innerText += receta.instructions;
        document.querySelector(".Coccion-Receta").innerText += receta.cookTimeMinutes;
        document.querySelector(".categorias-Receta").innerText += receta.tags;
    })
    .catch(function (e) {
        console.log("Error al obtener la receta:", e);
    });





