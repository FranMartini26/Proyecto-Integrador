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
    nombre.style.fontSize = "30px"

    if (data.recipes) {
        if (data.recipes.length > 0) {
            let recipe = data.recipes[0]; 

            let htmlContent = `
            <article class = "articles">
                    <a href="receta.html?id=${recipe.id}" class="link-detalle"> 
                    <img class="imagen" src="${recipe.image}" alt="${recipe.name}">
                    <p class="titulo">${searchQuery}</p>
                    <p class="n">Name: ${recipe.name}</p>
                    </a>    
                </article>
            `;

            resultados.innerHTML = htmlContent;
            
            let nombre = document.querySelector('.n')
            nombre.style.color = "black";
            let articulo = document.querySelector(".articles")
            articulo.style.backgroundColor = "beige"
            articulo.style.height = "500px"
            let titulo = document.querySelector(".titulo")
            titulo.style.fontWeight = "bold"
            titulo.style.fontSize = "30px"
            titulo.style.marginLeft = "50px"
            titulo.style.color = "black";
            let imagen = document.querySelectorAll(".imagen")
            for(let i = 0; i < imagen.length; i++){
                let img = imagen[i]
                img.style.width = "100%"
                img.style.borderRadius = "5px"
            }
    
            let articles = document.querySelectorAll(".articles")
            for(i = 0; i < articles.length; i++){
                let art = articles[i]
                art.style.border = "solid lightgrey"
                art.style.padding = "7px"
                art.style.margin = "25px"
                art.style.borderRadius = "7px"
                art.addEventListener("mouseover", function() {
                    art.style.backgroundColor = "lightgreen";
                });
                art.addEventListener("mouseout", function() {
                    art.style.backgroundColor = "beige";
                });
    
            }
    
            let titulos = document.querySelector(".titulo")
            titulos.style.textAlign = "center"
            titulos.style.paddingTop = "10px"
            titulos.style.fontSize = "35px"
    
            let detalle = document.querySelectorAll(".link-detalle")
            for(i = 0; i < detalle.length; i++){
            let det = detalle[i]
            det.style.textDecoration = "none"
            det.style.color = "green"
            }

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
