// adding ability to actually use the home button
document.getElementById('homeIcon').onclick = function () {
    location.href = "../../index.html"
}

let github = document.querySelector('.gitHubSubText')

github.addEventListener('click', () => {
    return location.href = "https://github.com/BC1337"
})

// contact form
let contact = document.querySelector('.contactText')
let formBox = document.querySelector('#form')

formBox.style.visibility = "hidden";



contact.addEventListener('click', () => {
    const form = document.getElementById('form');

    if (form.style.visibility === 'hidden') {
      form.style.visibility = 'visible';
    } else {
      form.style.visibility = 'hidden';
    }
  });

