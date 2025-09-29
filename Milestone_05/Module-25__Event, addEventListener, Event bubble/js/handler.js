document.getElementById('btn-update-title').addEventListener('click', function changeTitle(){
    // console.log('button click');
    const pageTitleElement = document.getElementById('page-title');
    pageTitleElement.innerText = 'its mean the event of handeling';
})

document.getElementById('login-btn')
.addEventListener('click', function(){
    const loginButton = document.getElementById('user-activity');
    loginButton.innerText = 'User Login Successfully.';
})

// declire the btn
document.getElementById('btn-name-update')
.addEventListener('click', function(){
    // collect the input value
    const nameInput = document.getElementById('input-name');
    const nameValue = nameInput.value;
    const name = 'Name: ' + nameValue;
    const namePrint = document.getElementById('name');
    namePrint.innerText = name;
})


document.getElementById('btn-number-update')
.addEventListener('click', function(){
    const inputNumber = document.getElementById('input-number');
    const number = 'Number: ' + inputNumber.value;
    const updateNumber = document.getElementById('number');
    updateNumber.innerText = number;
})