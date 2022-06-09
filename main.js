window.addEventListener('scroll', onScroll)

onScroll()
function onScroll(){
  showNavOnScroll()
  backToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrTargetLine && !sectionEndPassedTargetLine

  const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)
  
  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }
}

function showNavOnScroll(){
  var navigation = document.querySelector("#navigation")
  if(scrollY > 0){
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}

function backToTopButtonOnScroll(){
  var backtotop = document.querySelector("#backToTopButton")
  if(scrollY > 550){
    backtotop.classList.add('show')
  }else{
    backtotop.classList.remove('show')
  }
}

function openMenu(){ 
  document.body.classList.add("menu-expanded")
}

function closeMenu(){
  document.body.classList.remove("menu-expanded")
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`);