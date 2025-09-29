console.log('external file');

// option 2 click handler event
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// option 3: get Element by Id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3: different version
const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick = makePurple;
function makePurple(){
    document.body.style.backgroundColor = 'purple';
}