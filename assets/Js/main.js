/*Show MENU*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () => {
            //add the show-menu class to the div tag with the nav_menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*Remove Menu Mobile*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//Reduce the size and print on an A4 sheet
function scaleCv(){
    document.body.classList.add('scale-cv')
}

//remove the size when the cv is download
function removeScale(){
    document.body.classList.remove('scale-cv')
}

//Scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//Scroll home
sr.reveal('#container',{})
sr.reveal('#bg-container', {delay: 400})

//Scroll about
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay: 200})
sr.reveal('.about_text',{delay: 400})

//Scroll Skills
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_text',{delay: 200})
sr.reveal('.skills_data',{interval: 200})
sr.reveal('.img_skills',{delay: 400})
sr.reveal('.title-skills',{delay: 400})
sr.reveal('.education-text',{delay: 200})
sr.reveal('.education_content',{interval: 200})

//Scroll work
sr.reveal('.work_img',{interval: 200})

/*-- ANIMATE GSAP --*/

/*TEXT*/ 
gsap.from('.home_title', {opacity: 0, duration: 1.5, delay: .5, y: 50})
gsap.from('.home_description', {opacity: 0, duration: 1.5, delay: .8, y: 50})
gsap.from('.social', {opacity: 0, duration: 2, delay: 1.2, y: -40})
gsap.from('.home_scroll', {opacity: 0, duration: 1.5, delay: 2.3, y: 30})

/*-- ANIMATE SCROLLMAGIC --*/
var animate = new TimelineMax({onUpdate:updatePercentage})
var  controller = new ScrollMagic.Controller()
