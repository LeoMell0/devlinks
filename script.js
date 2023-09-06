function toggleMode() {
    const html = document.documentElement

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    html.classList.toggle('light') // faz a mesma coisa que o IF acima

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }

    const alter = document.querySelector('#profile img')	

    if(html.classList.contains('light')) {
        alter.setAttribute('alt', "Modo claro!")
    } else {
        alter.setAttribute('alt', "Foto de Myke brito sorrindo, usando oculos e camisa preta, barba e fundo amarelo")
    }
}


