const conteiner = document.querySelector('.container')
const button = document.createElement('div')
button.classList.add('button')
button.textContent = 'Collapse'
const massage = document.createElement('div')
massage.classList.add('massage', 'disable')
massage.textContent = 'Крылатые рептилии древнего рода и ужасающей силы — вот кто такие истинные драконы. Они известны, и их боятся за хищную хитрость и жадность, а древнейшие из драконов считаются одними из наиболее могучих существ в мире. Драконы это ещё и магические существа, чьи врождённые способности питают их смертоносное дыхание и другие необычные возможности.'
conteiner.append(button)
conteiner.append(massage)
button.addEventListener('click', () => {
    massage.classList.toggle('active')
    massage.classList.toggle('disable')
    button.classList.toggle('bttn_active')})