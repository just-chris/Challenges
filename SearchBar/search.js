const userCardTemplate = document.querySelector("[userTemplate]")
const userCardContainer = document.querySelector("[data-card-container]")
const searchInput = document.querySelector("[data-search]")
const userCards = document.querySelector('.userCards')


let users = []


const addMember = async (ev, currentUser) => {

  alert(`This is the current user ${currentUser}`)

}

document.addEventListener('click', e => {

  const ev = e.target

  if (e.target == searchInput) {

    searchInput.addEventListener("click", e => {

      userCards.style.display = 'grid'
    
     })

  }  else if (ev.matches('.add-user')){

    let currentUser = localStorage.getItem('currentUser')

    addMember(ev, currentUser)
    

  }else if (ev.matches('.card')){
    let element = ev.children[0]
    localStorage.setItem('currentUser', element.innerHTML)
    let item = localStorage.getItem('currentUser')
    alert(item)
    userCards.style.display = 'none'

  } else if (ev.matches('.body') || ev.matches('.header')){
    let parent = ev.parentElement
    let currentUser =  parent.children[0].innerHTML
    localStorage.setItem('currentUser', currentUser)
    let item = localStorage.getItem('currentUser')
    alert(item)
    userCards.style.display = 'none'
  } else {
    userCards.style.display = 'none'
  }

})
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json() )
 .then(data => { 

  users = data.map(user => {

   const card = userCardTemplate.content.cloneNode(true).children[0]
   const header = card.querySelector("[data-header]")
   const body = card.querySelector("[data-body]")

   header.textContent = user.name
   body.textContent = user.email
   userCardContainer.append(card)
   return { name: user.name, email: user.email, element: card }
  })
})


searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
 
  users.forEach(user => {
   const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
   user.element.classList.toggle("hide", !isVisible)
  })
 })