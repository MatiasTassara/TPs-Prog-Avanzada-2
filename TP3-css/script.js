
let menu = Array.from(document.querySelectorAll('.menu-text'));

menu.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.toggle('over'); 
    });
    element.addEventListener('mouseout', () => {
        element.classList.toggle('over');
    });
});
