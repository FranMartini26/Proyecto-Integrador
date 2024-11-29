fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let grid = document.querySelector(".grid-contenedor");
        let recetas = "";
        let dataRecetas = data;
        for (let i = 0; i < 10; i++) {
            let receta = dataRecetas.recipes[i];
            recetas += `
            <article class="articulo">
                <a href="receta.html?id=${receta.id}" class="enlace-articulo">
                <img src="${receta.image}" alt="">
                <div class="textos">
                    <p class="nombre">${receta.name}</p>
                    <p>Nivel de dificultad: ${receta.difficulty}</p>
                </div>
                </a>
            </article>
        `;
        }
        grid.innerHTML = recetas;
        let images = document.querySelectorAll(".articulo img");
        for (let i = 0; i < images.length; i++) {
            images[i].style.width = "100%";
            images[i].style.borderRadius = "5px"
        }
        let nombres = document.querySelectorAll(".nombre");
        for (let i = 0; i < nombres.length; i++) {
            nombres[i].style.fontWeight = "bold";
            nombres[i].style.fontSize = "20px";
        }
        let articles = document.querySelectorAll(".articulo");

        for (let i = 0; i < articles.length; i++) {
            let blanco = articles[i].querySelector("a"); 
            if (blanco) {
                blanco.style.color = "black"; 
                blanco.style.textDecoration = "none";
            
                articles[i].addEventListener("mouseover", function() {
                    articles[i].style.backgroundColor = "lightgreen"; 
                });
            
                articles[i].addEventListener("mouseout", function() {
                    articles[i].style.backgroundColor = "beige"; 
                });
            }
        }
        let newContainer = document.querySelector(".segundocontenedor");
        let boton = document.querySelector(".carga");
        boton.style.backgroundColor = "beige"; 
        
        boton.addEventListener("mouseover", function() {
            boton.style.backgroundColor = "lightgreen"; 
        });

        boton.addEventListener("mouseout", function() {
            boton.style.backgroundColor = "beige"; 
        });
        
        
        boton.addEventListener("click", function (event) {
            event.preventDefault(); 
            let recetas = "";
            for (let i = 10; i < 20; i++) {
                let receta = dataRecetas.recipes[i];
                recetas += `
                    <article class="NuevoArticulo">
                        <a href="receta.html?id=${receta.id}" class="enlace-articulo">
                        <img class="NuevaImagen" src="${receta.image}" alt="">
                        <div class="textos">
                            <p class="NuevoNombre">${receta.name}</p>
                            <p>Nivel de dificultad: ${receta.difficulty}</p>
                        </div>
                        </a>
                    </article>
                `;
            }
            newContainer.innerHTML += recetas;
        
            let NuevaImagen = document.querySelectorAll(".NuevaImagen");
            for (let i = 0; i < NuevaImagen.length; i++) {
                NuevaImagen[i].style.width = "100%";
                NuevaImagen[i].style.borderRadius = "5px";
            }
        
            let Nuevosnombres = document.querySelectorAll(".NuevoNombre");
            for (let i = 0; i < Nuevosnombres.length; i++) {
                Nuevosnombres[i].style.fontWeight = "bold";
                Nuevosnombres[i].style.fontSize = "20px";
            }
        
            let newArticles = document.querySelectorAll(".NuevoArticulo");
            for (let i = 0; i < newArticles.length; i++) {
                let blanco = newArticles[i].querySelector("a"); 
                if (blanco) {
                    blanco.style.color = "black"; 
                    blanco.style.textDecoration = "none";
                
                    newArticles[i].addEventListener("mouseover", function() {
                        newArticles[i].style.backgroundColor = "lightgreen"; 
                    });
                
                    newArticles[i].addEventListener("mouseout", function() {
                        newArticles[i].style.backgroundColor = "beige"; 
                    });
                }
            }
        
            boton.style.display = "none"; 
        });        

    })
    .catch(function (error) {
        console.log('El error es: ' + error);
    });










