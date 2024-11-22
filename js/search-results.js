let resultados = document.querySelector(".search-results");
let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);

let searchQuery = queryStringObj.get('q');

fetch(`https://dummyjson.com/recipes/search?q=${searchQuery}`)
.then(function (response) {
    return response.json(); 
})
.then(function (data) {
    let nombre = document.querySelector(".nombre")
    nombre.innerText = `Resultados de busqueda para: ${searchQuery}`
    nombre.style.fontSize = "30px"

    if (data.recipes) {
        if (data.recipes.length > 0) {
            let recipe = data.recipes[0]; 

            let htmlContent = `
                <article class = "fran11">
                    <img src="${recipe.image}" alt="${recipe.name}" />
                    <p>Name: ${recipe.name}</p>
                    <p><a href="receta.html?id=${recipe.id}" class="link-detalle"> Link para ir al detalle</a></p>
                </article>
            `;

            resultados.innerHTML = htmlContent;

            let article = document.querySelector('.fran11');
            article.style.border = "solid lightgrey"
            article.style.padding = "7px"
            article.style.margin = "25px"
            article.style.borderRadius = "7px"

            let img = article.querySelector('.search-results img');
            img.style.width = "450px"
            img.style.borderRadius = "5px"

            resultados.style.display = "flex"
            resultados.style.alignItems = "center"
            resultados.style.flexWrap = "wrap"
            resultados.style.justifyContent = "space-around"

            let links = document.querySelector('.link-detalle')
            links.style.textDecoration = "none"
            links.style.color = "green"

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
