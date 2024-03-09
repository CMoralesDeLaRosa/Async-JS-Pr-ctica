const img = document.querySelector('.random-image')

fetch(
  'https://pokeapi.co/api/v2/pokemon/' + (Math.floor(Math.random() * 151) + 1)
)
  .then((res) => res.json())
  .then((pokemon) => (img.src = pokemon.sprites.front_shiny))
