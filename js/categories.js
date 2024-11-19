fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let grido = document.querySelector(".grid-c");
        let contenedores = "";
        let dataTotal = data;

        for (let i = 0; i < dataTotal.recipes.length; i++) {
            let tageamos = dataTotal.recipes[i];
            for (let j = 0; j < tageamos.tags.length; j++) {
                contenedores += `
                    <article class="articulo">
                        <p class="franmartini">${tageamos.tags[j]}</p>
                    </article>
                `;
            }
        }
        grido.innerHTML = contenedores;

    })
    .catch(function (error) {
        console.log('El error es: ' + error);
    });



