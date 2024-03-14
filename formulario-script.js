let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

function mostrarPopup(input, label) {
    input.addEventListener('focus', function() {
        label.classList.add('required-popup')
    })

    input.addEventListener('blur', function() {
        label.classList.remove('required-popup')
    })
}

usernameInput.addEventListener('change', function(evento){
    let valor = evento.target.value
    console.log.apply(valor)

    if(valor.length < 5) {
        usernameInput.classList.remove('correct');
        usernameInput.classList.add('error');
        usernameHelper.innerText = 'Seu nome deve ter 5 ou mais caracteres'
        usernameHelper.classList.add('visible')
    } else {
        usernameInput.classList.remove('error');
        usernameHelper.classList.remove('visible');
        usernameInput.classList.add('correct');
    }
})

let emailInput = document.getElementById('email')
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById('email-helper')

mostrarPopup(emailInput, emailLabel)

emailInput.addEventListener('change', function(evento) {
    let valor = evento.target.value
    
    if(valor.includes('@') && valor.includes('.com')) {
        emailInput.classList.remove('error');
        emailHelper.classList.remove('visible');
        emailInput.classList.add('correct');
    } else {
        emailInput.classList.remove('correct');
        emailInput.classList.add('error');
        emailHelper.innerText = 'E-mail inválido'
        emailHelper.classList.add('visible')
    }
})