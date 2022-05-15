// adding ability to actually use the home button
document.getElementById('homeIcon').onclick = function () {
    location.href = "../projectHub/index.html"
}

// variables
const passwordBtn = document.querySelector("#genPasswordBtn");
const passwordBoxes = document.querySelectorAll('.password');
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

// generate password w/ eventlistener
 function genPass() {  
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = characterAmountNumber.value;
    let password = "";
    
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
   return password;
 }

passwordBtn.addEventListener('click', () => {
    passwordBoxes.forEach(box => {
        box.innerHTML = genPass();
    });
 });


// choose password length w/ slider input
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

// github button functionality & declaration

let gitHub = document.querySelector('#githubIcon')
 
gitHub.addEventListener('click', () => {
    return location.href = "https://github.com/BC1337"
})

