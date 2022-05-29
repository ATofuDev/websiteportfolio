const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')
//Para abrir el menu:
if (navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
//para cerrar el menu
if( navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

//Para móviles

const navLink=document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu') //Al hacer click en cualquier ícono se cerrará la lista
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

//Para poder abrir y cerrar las skills
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

      function toggleSkills(){
          let itemClass = this.parentNode.className
          
          for(i=0; i<skillsContent.length;i++){
               skillsContent[i].className='skills__content skills__close'
          }
          if(itemClass=== 'skills__content skills__close'){
              this.parentNode.className =' skills__content skills__open'
          }
      }
      skillsHeader.forEach((el)=>{
          el.addEventListener('click', toggleSkills)
      })
