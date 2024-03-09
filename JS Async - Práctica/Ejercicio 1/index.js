fetch('https://thronesapi.com/api/v2/Characters')
  .then((res) => res.json())
  .then((characters) => {
    createSelectCharacter(characters)
  })
  .catch((error) => console.log(error))

const createSelectCharacter = (characters) => {
  const selectCharacter = document.querySelector('#character-list')

  for (const character of characters) {
    const option = document.createElement('option')
    option.value = character
    option.textContent = character.fullName
    option.dataset.image = character.imageUrl
    selectCharacter.appendChild(option)
  }

  selectCharacter.addEventListener('change', (event) => {
    const selectedOption = event.target.selectedOptions[0]
    const imageUrl = selectedOption.dataset.image

    const characterImage = document.querySelector('.character-image')
    characterImage.src = imageUrl
    characterImage.alt = selectedOption.textContent
  })
}
