class Draggable {
    constructor() {
        this.dropzone = document.querySelector('.box__dragabble')
        this.box = document.querySelectorAll('.box') 
        this.boxPointer = document.querySelectorAll('.box__pointer')

        this._addEventListener()
    }
 
    _addEventListener() {
        this.box.forEach(element => {
            element.addEventListener('dragenter', this.dragenter)
            element.addEventListener('dragleave', this.dragleave)
            element.addEventListener('dragover', this.dragover)
            element.addEventListener('drop', this.drop)    
        })
 
        this.dropzone.addEventListener('dragstart', this.dragstart)
        this.dropzone.addEventListener('dragend', this.dragend)
      
    }
 
    dragstart(e) {         
        this.classList.add('drag_start')
       setTimeout(() => {
          this.classList.add('invisible')          
       }, 0)       
    }
 
    dragend(e) {
        console.log('dragend')
        this.classList.remove('invisible')
        this.classList.remove('drag_start') 
        this.classList.add('maskposition')     
    }
 
    dragenter(e) {
        e.preventDefault()   
        console.log('dragenter')
         this.classList.add('drag_enter')
    }
 
    dragleave(e) {
        console.log('dragleave')
        
        this.classList.remove('drag_enter')          
    }
 
    dragover(e) {
        e.preventDefault() 
        this.classList.remove('drag_enter') 
        console.log('dragover')       

    }
 
 
    drop(e) {
        e.preventDefault()    
        let dropzone = document.querySelector('.box__dragabble')        
        this.classList.remove('drag_enter')
        this.append(dropzone) 
        console.log('drooooooooooop')   
    }
 
    static init() {
        return new this()
    }
 }
  
 document.addEventListener('load', Draggable.init())