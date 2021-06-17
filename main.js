const toggleButton = document.getElementsByClassName('toggler')[0]
const navlinks = document.getElementsByClassName('list-items')[0]

toggleButton.addEventListener('click', () =>{
    navlinks.classList.toggle('active')
})

