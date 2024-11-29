let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let tag = queryStringObj.get('tag')

fetch(`https://dummyjson.com/recipes/tag/${tag}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.recipes)
        let grid = document.querySelector(".seccion-invididual");
        let recetas = "";

        for(let i = 0; i < data.recipes.length; i++){
            let receta = data.recipes[i]
            let article = `
                        <article class="articles">
                            <a href="receta.html?id=${receta.id}" class="link-detalle">
                            <img class="imagen" src= ${receta.image} alt=''>
                            <p class="titulo">${tag}</p>
                            <div class="textos">
                            <p>Título: ${receta.name} </p>
                            <p>Nivel de dificultad: ${receta.difficulty} </p>
                            </div>
                        </a>
                        </article>
                             `
            recetas += article
        }

        grid.innerHTML = recetas
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

        let nombre = document.querySelector(".nombre")
        nombre.style.textAlign = "center"
        nombre.style.paddingTop = "10px"
        nombre.style.fontSize = "35px"

        let detalle = document.querySelectorAll(".link-detalle")
        for(i = 0; i < detalle.length; i++){
        let det = detalle[i]
        det.style.textDecoration = "none"
        det.style.color = "green"
        }

    })
    .catch(function(error){
        console.log('El error es: ' + error)
    })