const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
  const activePanels = document.querySelectorAll('.active')
  activePanels.forEach(panel => {
    panel.classList.remove('active')
  })
}