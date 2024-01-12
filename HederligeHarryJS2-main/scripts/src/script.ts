document.addEventListener('DOMContentLoaded', function () {
  const contactButton = document.getElementById('button-contact') as HTMLAnchorElement;
  contactButton.addEventListener('click', function (event) {
    event.preventDefault(); 

    const nameInput = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
    const emailInput = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
    const phoneInput = (document.querySelector('input[name="phone"]') as HTMLInputElement).value;

    console.log('Name:', nameInput);
    console.log('Email:', emailInput);
    console.log('Phone:', phoneInput);

    const paragraph = createParagraph(
      'Name: ' + nameInput + ', Email: ' + emailInput + ', Phone: ' + phoneInput
    );

    const form = contactButton.closest('form');
    if (form) {
      form.parentNode?.insertBefore(paragraph, form.nextSibling);
    }   
  });

  const phoneInput = document.querySelector('input[name="phone"]') as HTMLInputElement;
  phoneInput.addEventListener('input', function () {
    const phoneValue = phoneInput.value;

    const phoneParagraph = createParagraph('Phone changed: ' + phoneValue);
    console.log(phoneParagraph.textContent);
  });

  const menuIcon = document.querySelector('.navicons__headeranchor') as HTMLAnchorElement;
  if (menuIcon) {
    menuIcon.addEventListener('click', function (event) {
      event.preventDefault(); 

      console.log('Menu icon clicked!');
    });
  }

  function createParagraph(text: string): HTMLParagraphElement {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = text;
    return paragraphElement;
  }
});
