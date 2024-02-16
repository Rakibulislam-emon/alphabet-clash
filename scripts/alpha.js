// 1: hide the screen by adding a hidden alement


//normal way 
// function play(){
//     const homescreen = document.getElementById('home-screen');
//     homescreen.classList.add('hidden')
    
//     // show the playground
//     const playground =document.getElementById('playground');
//     playground.classList.remove('hidden')
// }

// reusable way
function play(){
    hideById('home-screen');
    hideById('score')
    show('playground')
//reset score and life 
    setTextElementValueById('life',3)
    setTextElementValueById('currentScore',0)

    const alphabet = gameloop()

    
}

function gameloop(){
    const alphabet = randomAlphabets();
    console.log('random alphabet',alphabet,);
    // show random alphabets
    const randomAlphabetShow = document.getElementById('alphabets');
    randomAlphabetShow.innerText = alphabet;
    // set bg color 
    addBgcolorById(alphabet);
    
}


function gameover(){
    hideById('playground');
    show('score')
   const currentScore= getTextElementValueById('currentScore')
   setTextElementValueById('final-score',currentScore);
   const alphabet = getElementsInnerTextValueById('alphabets');
   removeBgColorById(alphabet)
   
}

function getElementsInnerTextValueById(elemntId){
    const elemnt = document.getElementById(elemntId);
    const textValue =elemnt.innerText;
    return textValue;
}