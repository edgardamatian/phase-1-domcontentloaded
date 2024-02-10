document.addEventListener('DOMContentLoaded', function() {
    // Select the element that contains the text
    const textElement = document.querySelector('#text');
  
    // Change the text content
    if (textElement) {
      textElement.textContent = 'This is really cool!';
    }
  });