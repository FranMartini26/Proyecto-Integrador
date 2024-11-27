fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let grido = document.querySelector(".grid-contt");
        let contenedores = "";
        let dataTotal = data;

        let tagsUnicos = [];

        for (let i = 0; i < dataTotal.recipes.length; i++) {
            let tageamos = dataTotal.recipes[i];
            for (let j = 0; j < tageamos.tags.length; j++) {
                let tag = tageamos.tags[j];
                let esUnico = true;

                for (let k = 0; k < tagsUnicos.length; k++) {
                    if (tagsUnicos[k] === tag) {
                        esUnico = false;
                        break;
                    }
                }

                if (esUnico) {
                    tagsUnicos[tagsUnicos.length] = tag;
                }
            }
        }

        for (let i = 0; i < tagsUnicos.length; i++) {
            contenedores += `
                <article class="articulo">
                    <a href="category.html?tag=${tagsUnicos[i]}">${tagsUnicos[i]}</a>
                </article>
            `;
        }

        grido.innerHTML = contenedores;

        let articles = document.querySelectorAll(".articulo");
        for (let i = 0; i < articles.length; i++) {
            articles[i].style.width = "11%";
            articles[i].style.margin = "10px";
            articles[i].style.border = "2px solid black";
            articles[i].style.display = "flex";
            articles[i].style.flexDirection = "column";
            articles[i].style.justifyContent = "space-between";
            articles[i].style.minHeight = "50px";
            articles[i].style.justifyContent = "center"; 
            articles[i].style.alignItems = "center";    
            articles[i].style.textAlign = "center";
            articles[i].style.backgroundColor = "beige";
            articles[i].style.color = "black";
            articles[i].style.borderRadius = "50%";

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
    }})
    .catch(function (error) {
        console.log('El error es: ' + error);
    });




