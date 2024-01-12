'use strict'
document.addEventListener('DOMContentLoaded', function () {
  const contactButton = document.getElementById('button-contact')
  contactButton.addEventListener('click', function (event) {
    var _a
    event.preventDefault()
    const nameInput = document.querySelector('input[name="name"]').value
    const emailInput = document.querySelector('input[name="email"]').value
    const phoneInput = document.querySelector('input[name="phone"]').value
    console.log('Name:', nameInput)
    console.log('Email:', emailInput)
    console.log('Phone:', phoneInput)
    const paragraph = createParagraph(
      'Name: ' + nameInput + ', Email: ' + emailInput + ', Phone: ' + phoneInput
    )
    const form = contactButton.closest('form')
    if (form) {
      ;(_a = form.parentNode) === null || _a === void 0
        ? void 0
        : _a.insertBefore(paragraph, form.nextSibling)
    }
  })
  const phoneInput = document.querySelector('input[name="phone"]')
  phoneInput.addEventListener('input', function () {
    const phoneValue = phoneInput.value

    const phoneParagraph = createParagraph('Phone changed: ' + phoneValue)
    console.log(phoneParagraph.textContent)
  })

  const menuIcon = document.querySelector('.navicons__headeranchor')
  if (menuIcon) {
    menuIcon.addEventListener('click', function (event) {
      event.preventDefault()
      console.log('Menu icon clicked!')
    })
  }
  function createParagraph(text) {
    const paragraphElement = document.createElement('p')
    paragraphElement.textContent = text
    return paragraphElement
  }
})
