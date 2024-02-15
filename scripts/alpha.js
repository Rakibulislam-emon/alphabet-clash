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
    show('playground')
    const alphabet = gameloop()

    
}

function gameloop(){
    const alphabet = randomAlphabets();
    console.log(alphabet,'here is random alphabet');
    // show random alphabets
    const randomAlphabetShow = document.getElementById('alphabets');
    randomAlphabetShow.innerText = alphabet;
    // set bg color 
    addBgcolorById(alphabet);
}