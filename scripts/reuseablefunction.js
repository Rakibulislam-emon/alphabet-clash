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

function addBgcolorById(elemnts){
    const bg = document.getElementById(elemnts);
    bg.classList.add('bg-orange-400');
}