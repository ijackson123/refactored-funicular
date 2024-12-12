let left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftright = document.querySelector('.leftright');
let text = document.querySelector('p');
let burp = document.querySelector('.burp');
burp.style.display ="none";
let eatingpizza = document.querySelector('.eatingpizza');
eatingpizza.style.display ="none";
let pizza2 = document.querySelector('.pizza2');
let alley = document.querySelector('.alley');
alley.style.display ="none";
let Zombie = document.querySelector('.Zombie');
Zombie.style.display ="none";
let Gameover = document.querySelector('.Gameover');
Gameover.style.display ="none";

// Choice A
let pizza = document.querySelector('.pizza');
pizza.style.display ="none";






left.addEventListener('click',  function() {

    leftright.style.display ="none";
    right.style.display ="none";
    left.style.display ="none";
    pizza.style.display ="block";
text .innerHTML ="to eat double click"

});

pizza.addEventListener('dblclick',  function() {

pizza.style.display ="none";
burp.style.display ="block";
text .innerHTML ="that was good"


});

pizza2.addEventListener('mouseenter',  function() {
text .innerHTML ="that was some good pizza"
pizza2.style.display ="block";

});


// Choice B





right.addEventListener('click',  function() {

    leftright.style.display ="none";
    right.style.display ="none";
    left.style.display ="none";
    alley.style.display ="block";
text .innerHTML ="You have entered a dark Forest,to walk double click"

});

alley.addEventListener('dblclick',  function() {

    alley.style.display ="none";
    Zombie.style.display ="block";
    text .innerHTML ="You hvae been killed by a mysterious monster lurking in the shadows, Double click to End game"
    
    
    });

    Zombie.addEventListener('dblclick',  function() {

        Zombie.style.display ="none";
        Gameover.style.display ="block";
        text .innerHTML ="GAMEOVER"
        
        
        });

