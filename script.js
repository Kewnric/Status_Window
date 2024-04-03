/* [This is to Hover and add a CSS in Hovered DIV | Add #myDiv.hovered or #ID. + .hovered ] */
const hoverStatus_Window = document.getElementById('ACTION-5');
const hoverDiv = document.getElementById('ACTION-2');
const hoverDivCLOSE = document.getElementById('ACTION-8');
const changeButton = document.getElementById('ACTION-2');
const changeButtonCLOSE = document.getElementById('ACTION-8');
const targetDiv1 = document.getElementById('ACTION-1');
const targetDiv2 = document.getElementById('ACTION-2');
const targetDiv3 = document.getElementById('ACTION-3');
const targetDiv4 = document.getElementById('ACTION-4');
const targetDiv5 = document.getElementById('ACTION-5');
const targetDiv6 = document.getElementById('ACTION-6');
const targetDiv7 = document.getElementById('ACTION-7');
const targetDiv8 = document.getElementById('ACTION-8');
const targetDiv9 = document.getElementById('ACTION-9');
const targetDiv10 = document.getElementById('ACTION-10');

hoverDiv.addEventListener('mouseover', function() { /* HOVERING THE DIV */
    targetDiv1.classList.add('hovered');
    targetDiv2.classList.add('hovered');
    targetDiv3.classList.add('hovered');
    targetDiv4.classList.add('hovered');
});

hoverDiv.addEventListener('mouseout', function() { /* HOVEROUT THE DIV */
    targetDiv1.classList.remove('hovered');
    targetDiv2.classList.remove('hovered');
    targetDiv3.classList.remove('hovered');
    targetDiv4.classList.remove('hovered');
});


hoverDivCLOSE.addEventListener('mouseover', function() { /* HOVERING THE DIV */
    targetDiv7.classList.add('hovered');
    targetDiv8.classList.add('hovered');
    targetDiv10.classList.add('hovered');
});
hoverDivCLOSE.addEventListener('mouseout', function() { /* HOVEROUT THE DIV */
    targetDiv7.classList.remove('hovered');
    targetDiv8.classList.remove('hovered');
    targetDiv10.classList.remove('hovered');
});


changeButton.addEventListener('click', function() { /* CLICKING THE DIV */
    targetDiv5.classList.toggle('clicked');
    targetDiv6.classList.toggle('clicked');
    targetDiv9.classList.toggle('clicked');
    targetDiv8.classList.toggle('clicked');
});

changeButtonCLOSE.addEventListener('click', function() { /* CLICKING THE DIV */
    targetDiv6.classList.toggle('clicked');
    targetDiv5.classList.toggle('clicked');
    targetDiv9.classList.toggle('clicked');
    targetDiv8.classList.toggle('clicked');
});


hoverStatus_Window.addEventListener('mouseout', function() {
    targetDiv5.classList.remove('clickedX');
    targetDiv6.classList.remove('clickedX');
});