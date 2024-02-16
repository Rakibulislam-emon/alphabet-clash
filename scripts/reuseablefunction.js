// for hide
function hideById(elemntsId){
    const hidden = document.getElementById(elemntsId);
    hidden.classList.add('hidden');

}
// for show 
function show(showById){
    const showed = document.getElementById(showById);
    showed.classList.remove('hidden')

}


function randomAlphabets(){
    const alphabetstring ='abcdefghijklmnopqrstuvwxyz'
    // console.log(alphabetstring);
    // step-1
   const alphabet= alphabetstring.split('');
  
    // spet-2
    const randomNumber = Math.random()*25;
    const index= Math.round(randomNumber)
   

    const letter = alphabet[index]
    // console.log(letter)
    return letter;
}
// for add bg color of key
function addBgcolorById(elemnts){
    const bg = document.getElementById(elemnts);
    bg.classList.add('bg-orange-400');
}
// for remove bg color of key
function removeBgColorById (elemnts){
    const removeBg =document.getElementById(elemnts);
    removeBg.classList.remove('bg-orange-400');
}
// key parts start here

document.addEventListener('keyup', keypressUp)
// for keypress
function keypressUp (event){
    const playerPressedKye = event.key;
    console.log('key pressed', playerPressedKye)

    // for quit the game
    if(playerPressedKye ==='Escape'){
        gameover();
    }
    // expected key to pressed by user
    const getTheShownId = document.getElementById('alphabets');
    const innerTextOfId = getTheShownId.innerText;
    const convert =innerTextOfId.toLowerCase();
    console.log(convert,playerPressedKye)
    // matched or not
    if(playerPressedKye===convert){
        console.log('you win a point');

       const currentScore= getTextElementValueById ('currentScore');
       const newScore = currentScore +1;
        setTextElementValueById('currentScore',newScore);
        removeBgColorById(convert);
        gameloop();
        


    }
    else{
        console.log('you lost a life');
        const currentScore = getTextElementValueById('life') 
        const newLifeScore =currentScore -1;
        setTextElementValueById('life',newLifeScore);
        
        if(newLifeScore === 0){
            gameover()
        }
    }
}


function getTextElementValueById (elemntId){
    const elemnt = document.getElementById(elemntId);
    const elemntValueText = elemnt.innerText;
    const value = parseInt(elemntValueText);
    return value;
}

function setTextElementValueById(elemntId,value){
    const elemnt = document.getElementById(elemntId);
    elemnt.innerText = value;
}
