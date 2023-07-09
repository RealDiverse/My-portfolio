// DOM Query Method

const title = document.getElementById(`title`)
console.log(title)

const listItems = document.getElementsByClassName("listItems")
console.log(listItems)


const liElements = document.getElementsByTagName(`li`)
console.log(liElements)

const paragraph = document.querySelector("p")
console.log(paragraph)

const paragraphs = document.querySelectorAll(`p`)
console.log(paragraphs)


for (let i = 0; i < listItems.length; i++)
{
    listItems[i].style.color = "blue"
    console.log(listItems[i])
}

const ul = document.querySelector("ul")
console.log(ul)

const newListItem = document.createElement("li")
console.log(newListItem)

ul.append(newListItem)
console.log(ul)

// add text to the list item 
newListItem.innerText = "New List Item Five"

title.setAttribute("id", "title")
title.style.color = "Blue"

document.body.append(ul)

const liOne = document.createElement("li")
const liTwo = document.createElement("li")
const liThree = document.createElement("li")

ul.append(liOne, liTwo, liThree)

for (let i = 0; i < listItems.length; i++) 
{
    
}


// Remove an element

// DOM Traversal 

console.log(ul.parentElement)
console.log(ul.parentNode)

const htmlElement = document.documentElement
console.log(htmlElement)
console.log(htmlElement.parentElement)
console.log(htmlElement.parentNode)

console.log(ul.childNodes) 

// Child Node Traversal
console.log(ul.childNodes)
console.log(ul.childNodes[1])
console.log(ul.firstChild)
console.log(ul.lastChild)

// Access just the child elements 

console.log(ul.children)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)

const itemTwo = ul.children[1]
const itemTwoClone = itemTwo.cloneNode(true)
ul.insertBefore(itemTwoClone, ul.children[2])



const time = document.getElementById("the")
const btn = document.getElementById("btn")

btn.addEventListener("click", (e) =>
{
    alert("Thanks for clicking the button!")
    console.log(e)
    console.log(e.type)

})


window.addEventListener("keypress", (e) => {
    if (e.code === "Space") 
        alert("The Space key has been pressed")
    
    else {
        console.log("Another key has been pressed")
    }
})


let greeting = () => {
    alert("Good Morning!")
}

title.addEventListener("Click", greeting())



title.addEventListener("click", greeting)

title.addEventListener("mouseover", () => {
    title.style.backgroundColor = "Dodgerblue"
})

title.addEventListener("Mouseout", () => {
    title.style.backgroundColor = "white"
})

let createNewElement = () => {
    let newElement = document.createElement("h2")
    newElement.innerHTML = "I am a new element!"
    container.append(newElement)
} 

let deleteRecentElement = () => {
    container.lastElementChild.remove()
}


addBtn.addEventListener("click", createNewElement)

deleteBtn.addEventListener("click", deleteRecentElement)

