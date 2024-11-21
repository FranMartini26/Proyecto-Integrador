let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let tag = queryStringObj.get('tag')

fetch(`https://dummyjson.com/recipes/tag/${tag}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.recipes)
        
        document.querySelector(".nombre").innerText = `${tag}`

        let grid = document.querySelector(".grid-contenedor");
        let recetas = "";

        for(let i = 0; i < data.recipes.length; i++){
            let receta = data.recipes[i]
            let article = `
                        <article class="articles">
                            <img src= ${receta.image} alt=''>
                            <p>Título: ${receta.name} </p>
                            <p>Nivel de dificultad: ${receta.difficulty} </p>
                            <p> <a href="receta.html?id=${receta.id}" class="link-detalle"> Link para ir al detalle </a> </p>
                        </article>
                             `
            recetas += article
        }

        grid.innerHTML = recetas

        grid.style.display = "flex"
        grid.style.alignItems = "center"
        grid.style.flexWrap = "wrap"
        grid.style.justifyContent = "space-around"

        let imagen = document.querySelectorAll(".grid-contenedor img")
        for(let i = 0; i < imagen.length; i++){
            let img = imagen[i]
            img.style.width = "300px"
            img.style.width = "300px"
            img.style.borderRadius = "5px"
        }

        let articles = document.querySelectorAll(".articles")
        for(i = 0; i < articles.length; i++){
            let art = articles[i]
            art.style.border = "solid lightgrey"
            art.style.padding = "7px"
            art.style.margin = "25px"
            art.style.borderRadius = "7px"

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