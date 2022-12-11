const body = document.querySelector('body')
const splash = document.querySelector('.splash')
const mainScreen = document.querySelector('.mainScreen')
const beep = document.querySelector('#beep')
const sourceControler = document.querySelector('#sourceControler')
const scanImage = document.querySelector('.scanPic img')


// splash screen delay and remove
setTimeout(()=>{
    splash.style.display='none'
    body.style.backgroundColor='white'
    mainScreen.style.display="block"
},4000)



//on press sounds beep and after that voice man message
const playSound = () =>{
    beep.play()
    setTimeout(()=>{

        sourceControler.play()
    },2000)
} 




scanImage.addEventListener('click',playSound)