const left = document.querySelector('.leftarrow');
const right = document.querySelector('.rightarrow');
const slider = document.querySelector('.carousel_slider');

var cardIndex;
var slidenum;

right.addEventListener('click', function () {
    cardIndex = document.querySelector('input[name="slide"]:checked').value;
    if (cardIndex < 5) {
        cardIndex++;        
    }
    else {
        cardIndex = 1;
    }
    slidenum = 'slide' + cardIndex;
    document.getElementById(slidenum).checked = true;
});

left.addEventListener('click', function () {
    cardIndex = document.querySelector('input[name="slide"]:checked').value;
    if (cardIndex > 1) {
        cardIndex--;
    }
    else {
        cardIndex = 5;
    }
    slidenum = 'slide' + cardIndex;
    document.getElementById(slidenum).checked = true;
});

57