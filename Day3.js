const keyInput = document.getElementById("keyInput")
const valueInput = document.getElementById("valueInput")
const submitBtn = document.getElementById("submitBtn")
const clearButton = document.getElementById("theButton")
const outputKeyValue = document.getElementById("outputData")
const storageOutput = document.getElementById("storageOutput")
const searchInput = document.getElementById("searchInput")
const searchOutput = document.getElementById("searchOutput")



const saveToLocalStorage = () => {
    const key = keyInput.value
    const value = valueInput.value
    const clearB = clearButton.value

    if (key && value)
    {
        localStorage.setItem(key, value)
    }
    else if (clearB)
    {
        localStorage.clear();
    }
}
console.log(localStorage)
submitBtn.addEventListener("click", saveToLocalStorage)


const removeKeyValuePairs = () => {
    const key = keyInput.value
    const value = valueInput.value

    if (key && value) 
    {
        localStorage.clear();
        // refresh the page after clearing local storage
        location.reload();
    }

}
clearButton.addEventListener("click", removeKeyValuePairs)

const outputData = () => {
    const key = keyInput.value
    const value = valueInput.value

    if (key && value) 
    {
        document.localStorage.getItem("Tahir").getElementById("w")
    }

}
buttonB.addEventListener("click", outputData)



// task 2, output the items from local storage 
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)
    let lsItem = document.createElement("h3")
    lsItem.setAttribute(`id`, `${key}`)
    lsItem.innerText = `${key}: "${value}`
    storageOutput.append(lsItem)
    
}

console.log(localStorage.key(1))

// 3: search through local storage for a specific pair
const searchLocalStorage = (e) => {
    e.preventDefault()

    // create a strict variable 
    const key = searchInput.value
    const result = localStorage.getItem(key)


    // create an element to output the key value pairs
    const searchResult = document.createElement("h3")
    searchResult.innerText = `search result: ${key}: ${result}`
    searchOutput.append(searchResult)

}
// Call the method above
searchBtn.addEventListener(`click`, searchLocalStorage)




const keyPressed = (d) => {
    d.addEventListener("keypress")
    console.log("object has been moved")
}



window.addEventListener("keypress", (e) => {
    if (e.code === "e") 

        console.log("The e key has been pressed")
    
    else 
    {
        console.log("Another key has been pressed")
    }
})


