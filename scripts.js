const panels = document.querySelectorAll('.panel')

panels.forEach((panel, i) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        currentActive = (i + 1)
        progressUpdate();
    })
})

function removeActiveClasses() {
  const activePanels = document.querySelectorAll('.active')
  activePanels.forEach(panel => {
    panel.classList.remove('active')
  })
}

const progress = document.querySelector('.progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const panel1 = document.querySelector('.panel1')
const panel2 = document.querySelector('.panel2')
const panel3 = document.querySelector('.panel3')
const panel4 = document.querySelector('.panel4')

const progressUpdate = () => {
  circles.forEach((item, i) => {
    if (i < currentActive) {
      item.classList.add('activeCircle')
    }
    else item.classList.remove('activeCircle')
  })

  const activeCircles = document.querySelectorAll('.activeCircle')

  if (currentActive === 4) {
    next.disabled = true
  } else if (currentActive === 1) {
    prev.disabled = true
  } else {
    next.disabled = false
    prev.disabled = false
  }

  panels.forEach(item => {
    item.classList.remove('active')
  })

  if(currentActive === 1) {
    panel1.classList.add('active')
  }
  else if(currentActive === 2) {
    panel2.classList.add('active')
  }
  else if(currentActive === 3) {
    panel3.classList.add('active')
  }
  else if(currentActive === 4) {
    panel4.classList.add('active')
  }

  progress.style.width = (((activeCircles.length - 1) / (circles.length - 1)) * 100) + '%'
}

let currentActive = 1

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  progressUpdate()
})

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  progressUpdate()
})

const openButton = document.querySelector('.circle__open-button')
const closeButton = document.querySelector('.circle__close-button')
const pageBody = document.querySelector('.body')

openButton.addEventListener('click', () => {
  pageBody.classList.add('show-nav')
})

closeButton.addEventListener('click', () => {
  pageBody.classList.remove('show-nav')
})