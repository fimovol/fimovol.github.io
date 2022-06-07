// alert("hola")

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(response => {
        let hola = document.querySelector('.root span')
        hola.innerHTML = response.species.name
    })

