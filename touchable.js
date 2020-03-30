window.onload = function(){
    let mask = document.getElementById('mask')
    mask.addEventListener('touchmove', ev =>{
        let touchlocation = ev.targetTouches[0]
        mask.style.left = touchlocation.pageX + 'px'
        mask.style.top = touchlocation.pageY + 'px'        
    })

    mask.addEventListener('touchend', ev => {
        let x = parseInt(mask.style.left)
        let y = parseInt(mask.style.stop)       
        
        if(x < 416 || y < 263 ){
            mask.style.left = '390px'
            mask.style.stop = '335px' 
            console.log(`X = ${x} and Y = ${y}`)    
            this.alert('yaaay')                      
        }      
    })    
    document.onmousemove = e =>{
        let x = e.pageX
        let y = e.pageY
        console.log(`X = ${x} and Y = ${y}`) 
    }
}

