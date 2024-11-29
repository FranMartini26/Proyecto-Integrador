let queryString = location.search

let queryStringObj = new URLSearchParams(queryString)

let tag = queryStringObj.get('tag')

fetch(`https://dummyjson.com/recipes/tag/${tag}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        document.querySelector(".nombre").innerText = `${tag}`

        let grid = document.querySelector(".seccion-individual");
        let recetas = "";

        for(let i = 0; i < data.recipes.length; i++){
            let receta = data.recipes[i]
            let article = `
                        <article class="articles123">
                            <a href="receta.html?id=${receta.id}" class="link-detalle">
                            <img src= ${receta.image} alt=''>
                            <p class="titu">Título: ${receta.name} </p>
                            <p class="difi">Nivel de dificultad: ${receta.difficulty} </p>
                            </a>
                        </article>
                             `
            recetas += article
        }

        grid.innerHTML = recetas

        grid.style.display = "flex"
        grid.style.alignItems = "center"
        grid.style.flexWrap = "wrap"
        grid.style.justifyContent = "space-around"

        let tit = document.querySelectorAll('.titu')
        for(let i=0; i < tit.length; i++){
            let titu = tit[i]
            titu.style.paddingTop = "12px"
        }

        let dif = document.querySelectorAll('.difi')
        for(let i=0; i < dif.length; i++){
            let difi = dif[i]
            difi.style.paddingTop = "12px"
        }


        let imagen = document.querySelectorAll(".seccion-individual img")
        for(let i = 0; i < imagen.length; i++){
            let img = imagen[i]
            img.style.width = "450px"
            img.style.borderRadius = "5px"
        }

        let articles = document.querySelectorAll(".articles123")
        for(i = 0; i < articles.length; i++){
            let art = articles[i]
            art.style.border = "solid lightgrey"
            art.style.padding = "15px"
            art.style.margin = "50px"
            art.style.borderRadius = "7px"
            art.style.backgroundColor = "beige"
            art.style.height = "540px"

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
        nombre.style.fontSize = "50px"

        let detalle = document.querySelectorAll(".link-detalle")
        for(i = 0; i < detalle.length; i++){
        let det = detalle[i]
        det.style.textDecoration = "none"
        det.style.color = "black"
        }

    })
    .catch(function(error){
        console.log('El error es: ' + error)
    })