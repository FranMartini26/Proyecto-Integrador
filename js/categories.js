let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categorias = queryStringObj.get('tags');   

fetch(`https://dummyjson.com/recipes/${categorias}`)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        let cat = document.querySelector(".grid-c");
        let tags = "";
        let data_categorias = data.recipes;

        for (let i = 0; i < data_categorias.length; i++) {
            let y = data_categorias[i]; 
            for (let j = 0; j < y.tags.length; j++) { 
                let tag = y.tags[j];
                tags += `
                    <article class="fran">
                        <p class="fran2">${tag}</p>
                    </article>
                `;
            }
        }
        cat.innerHTML = tags; 
    })
    .catch(function (error) {
        console.error("Error:", error);
    });



