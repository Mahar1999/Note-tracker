//const

const noteTitle = document.querySelector('.noteTitle')
const noteTextArea = document.querySelector('.noteTextArea')
const addBtn = document.querySelector('.btn')
const noteContainer = document.querySelector('.noteList__container')
const readMore = document.querySelector('.readMore__btn')
const popupContainer = document.querySelector('.popup')
const backdrop = document.querySelector('.backdrop')
const popupEl = popupContainer.querySelector('.popup__element')
const NodeListEl = document.querySelector('.noteList__element')

/*******************************************************/
//function
const addItem = function () {
    console.log(noteTitle.value)
    console.log(noteTextArea.value)

    const markup = ` 
    <div class="noteList__element">
        <div class="noteList__element-title">
            <h3>${noteTitle.value}</h3>
        </div>
        <div class="noteList__element-note">
            <p>
               ${noteTextArea.value}
            </p>
        </div>
        <div class="readMore__btn">
            <button class="btn readMore">Read More</button>
        </div>
        <div class="delete__btn">
            <button class="btn delete">Delete</button>
        </div>
    </div>
    `
    noteContainer.insertAdjacentHTML('beforeend',markup)
}

const popup = function(){
    backdrop.classList.remove('displayNone')
    popupContainer.classList.remove('displayNone')
    
    const markup = `
    
        <div class="popup__element-title">
            <h3>${noteTitle.value}</h3>
        </div> 
        <div class="popup__element-note">
            <p>
            ${noteTextArea.value}
            </p>
        </div>
    
    `
    popupEl.innerHTML = markup
}

//event Listeners

//add btn
addBtn.addEventListener('click', addItem)

noteContainer.addEventListener('click', e=>{
    if(!e.target.classList.contains('readMore'))return

    popup()
})


// console.log(popupContainer)
backdrop.addEventListener('click',e=>{
    
    backdrop.classList.add('displayNone')
    popupContainer.classList.add('displayNone')
})


noteContainer.addEventListener('click',e=>{
    if(!e.target.classList.contains('delete')) return


    const parent=e.target.closest('.noteList__element')
    noteContainer.removeChild(parent)
    console.log(parent)  
})


