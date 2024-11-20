let resultados = document.querySelector(".search-results");
let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);

let searchQuery = queryStringObj.get('comentariosusuario');

fetch(`https://dummyjson.com/recipes/search?q=${searchQuery}`)
.then(function (response) {
    return response.json(); 
})
.then(function (data) {
    if (data.recipes) {
        if (data.recipes.length > 0) {
            let recipe = data.recipes[0]; 

            let htmlContent = `
                <article>
                    <img src="${recipe.image}" alt="${recipe.name}" />
                    <p>Name: ${recipe.name}</p>
                    <p><a href="receta.html?id=${recipe.id}" class="link-detalle">Link para ir al detalle</a></p>
                </article>
            `;

            resultados.innerHTML = htmlContent;
        } else {
            resultados.innerHTML = `<p>No se encontraron recetas con el nombre "${searchQuery}".</p>`;
        }
    } else {
        resultados.innerHTML = `<p>No se encontraron recetas con el nombre "${searchQuery}".</p>`;
    }
})
.catch(function (error) {
    resultados.innerHTML = `<p>Hubo un error al buscar la receta. Intenta de nuevo más tarde.</p>`;
    console.error("Error al hacer el fetch:", error);
});
