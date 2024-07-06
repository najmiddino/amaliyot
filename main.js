let word = prompt('soz kiriting')

let color = prompt('Rang kiriting')

let bgcolor = prompt ("Bg rangini kiriting")

let body = document. querySelector ('body')

let str = document. createElement('p')

str.innerHTML = word

body.append(str)

str.style.color = color

body.style.background = bgcolor

str.style.textAlign = 'center'
str.style.fontSize = '45px'
str.style.marginTop = '350px'


str.classList.add('word')