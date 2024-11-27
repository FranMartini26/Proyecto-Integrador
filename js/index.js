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
                    <img src="${receta.image}" alt="">
                    <p class="nombre">${receta.name}</p>
                    <p>Nivel de dificultad: ${receta.difficulty}</p>
                    <p><a href="receta.html?id=${receta.id}" class="link-detalle">Link para ir al detalle</a></p>
                </article>
            `;
        }
        grid.innerHTML = recetas;


        let images = document.querySelectorAll(".articulo img");
        for (let i = 0; i < images.length; i++) {
            images[i].style.width = "100%";
        }

        let nombres = document.querySelectorAll(".nombre");
        for (let i = 0; i < nombres.length; i++) {
            nombres[i].style.fontWeight = "bold";
            nombres[i].style.fontSize = "20px";
        }

        let links = document.querySelectorAll(".link-detalle");
        for (let i = 0; i < links.length; i++) {
            links[i].style.textDecoration = "none";
            links[i].style.color = "green";
        }

        let newContainer = document.querySelector(".segundocontenedor");
        let boton = document.querySelector(".carga "); 
        boton.addEventListener("click", function (event) {
            event.preventDefault(); 
            let recetas = "";
            for (let i = 10; i < 20; i++) {
                let receta = dataRecetas.recipes[i];
                recetas += `
                    <article class="NuevoArticulo">
                        <img class="NuevaImagen" src="${receta.image}" alt="">
                        <p class="NuevoNombre">${receta.name}</p>
                        <p>Nivel de dificultad: ${receta.difficulty}</p>
                        <p><a href="receta.html?id=${receta.id}" class="Nuevolink-detalle">Link para ir al detalle</a></p>
                    </article>
                `;
            }
            newContainer.innerHTML += recetas;

            let NuevaImagen = document.querySelectorAll(".NuevaImagen");
            for (let i = 0; i < NuevaImagen.length; i++) {
                NuevaImagen[i].style.width = "100%";
            }

            let Nuevosnombres = document.querySelectorAll(".NuevoNombre");
            for (let i = 0; i < Nuevosnombres.length; i++) {
                Nuevosnombres[i].style.fontWeight = "bold";
                Nuevosnombres[i].style.fontSize = "20px";
            }

            let Nlinks = document.querySelectorAll(".Nuevolink-detalle");
            for (let i = 0; i < Nlinks.length; i++) {
                Nlinks[i].style.textDecoration = "none";
                Nlinks[i].style.color = "black";
            }

            boton.style.display = "none"; 
        });

    })
    .catch(function (error) {
        console.log('El error es: ' + error);
    });










