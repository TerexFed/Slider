const dots = document.querySelectorAll(".dot")
const round = document.querySelector(".round")
const slider = document.querySelector(".slider")

dots[0].firstElementChild.style.fontSize = '27px' 
dots[0].style.color = 'rgb(27, 96, 157)'


round.onmousedown = function(event){
    event.preventDefault()
    let shiftX = event.clientX - round.getBoundingClientRect().left;
   
    document.addEventListener('mousemove', onmousemove)
    document.addEventListener('mouseup',onmouseup)
    
    function onmousemove(event){
        for(let i = 0; i<dots.length;i++){
            dots[i].style = null
            dots[i].firstElementChild.style = null
            dots[i].style.transition = '0.3s'
        }
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
            if(newLeft<=0){
                newLeft = 0
                dots[0].firstElementChild.style.fontSize = '27px' 
                dots[0].style.color = 'rgb(0, 136, 255)'
            }
        let rightEdge = slider.offsetWidth - round.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            if(newLeft >= 64 && newLeft <= 73){
                dots[1].firstElementChild.style.fontSize = '27px' 
                dots[1].style.color = 'rgb(0, 136, 255)'
            }
            if(newLeft >= 141 && newLeft <= 153){
                dots[2].firstElementChild.style.fontSize = '27px' 
                dots[2].style.color = 'rgb(0, 136, 255)'
            }
            if(newLeft >= 214 && newLeft <= 225){
                dots[3].firstElementChild.style.fontSize = '27px' 
                dots[3].style.color = 'rgb(0, 136, 255)'
            }
            if(newLeft >= 286 && newLeft <= 300){
                dots[4].firstElementChild.style.fontSize = '27px' 
                dots[4].style.color = 'rgb(0, 136, 255)'
            }
            if(newLeft >= 355){
                dots[5].firstElementChild.style.fontSize = '27px' 
                dots[5].style.color = 'rgb(0, 136, 255)'
            }
        round.style.left = newLeft + 'px'

    }
    function onmouseup() {
        document.removeEventListener('mouseup', onmouseup);
        document.removeEventListener('mousemove', onmousemove);
    }
    
}
