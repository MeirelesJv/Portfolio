function clicar(clickedElement) {
    // Check if the clicked element already has the 'teste' class
    const hasTesteClass = clickedElement.classList.contains('devActiv');

    // If it does, remove the class
    if (hasTesteClass) {
        clickedElement.classList.remove('devActiv');
        return; // Exit the function if the class is removed
    }

    // Otherwise, remove the class from all other elements and add it to the clicked element
    const allDevElements = document.querySelectorAll('.dev');
    allDevElements.forEach(element => element.classList.remove('devActiv'));
    clickedElement.classList.add('devActiv');
};

function truncateParagraphs() {
    const allParagraphs = document.querySelectorAll('p'); // Select all <p> elements
    allParagraphs.forEach(paragraph => {
      const textContent = paragraph.textContent;
      if (textContent.length > 100) {
        paragraph.textContent = textContent.substring(0, 100) + '...';
      }
    });
}
function checkScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { // Adjust breakpoint as needed
        truncateParagraphs();
    }
}