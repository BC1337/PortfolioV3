let homeBtn = document.querySelector('#blogToHome')
let gitHub = document.querySelector('#githubIcon')

homeBtn.addEventListener('click', () => {
    return  location.href = "index.html"
})

gitHub.addEventListener('click', () => {
    return location.href = "https://github.com/BC1337"
})


let getInTouch = document.querySelector('#contactBtn')
let formBox = document.querySelector('#form')

formBox.style.visibility = "hidden";



getInTouch.addEventListener('click', () => {
    const form = document.getElementById('form');

    if (form.style.visibility === 'hidden') {
      form.style.visibility = 'visible';
    } else {
      form.style.visibility = 'hidden';
    }
  });
