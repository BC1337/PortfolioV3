let homeBtn = document.querySelector('#blogToHome')
let gitHub = document.querySelector('#githubIcon')
let aboutMe = document.querySelector('#blogToAbout')
let findOutMoreText = document.querySelector('#findOutMoreText')

homeBtn.addEventListener('click', () => {
    return  location.href = "index.html"
})

gitHub.addEventListener('click', () => {
    return location.href = "https://github.com/BC1337"
})

aboutMe.addEventListener('click', () => {
  return  location.href = "resume.html"
})

findOutMoreText.addEventListener('click', () => {
  return  location.href = "resume.html"
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
