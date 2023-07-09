// stare the data output div in a const 
const dataOutput = document.getElementById("dataOutput")

// Asynchronous function to fetch the data from the API


async function getData() {
    // Await the response from the API and store the data in a response variable
    const response = await fetch("https://api.adviceslip.com/advice")
    // we wait on the response them convert it to workable JSON upon receiving it 
    const apiData = await response.json()
    // Once we have the data we can return it in order to work with it 
    return apiData 
}

// add eventListener to wait for the page to load before calling our fetch request (getData())

document.addEventListener("DOMContentLoaded", async () => {

    // Declare an empty array to store the apiData 
    let apiData = []

    // try catch to run the fetch request and check for any errors before proceeding 
    try {
    // if no error occurs, fetch the data from the api and store it in our array
        apiData = await getData()
     } catch (error) {
            console.log(error)
        }

        console.log(apiData.slip)

        // Create a <p> element to store the advice text 
        const adviceText = document.createElement("p")
        // set the innertext of the adviceText element to the advice data from the API. 
        adviceText.innerText = `"${apiData.slip.advice}`
        // adviceText.style.backgroundColor = "orange";
        // add a classlist to the element for styling purposes
        adviceText.classList.add("advice")
        // append the advice Text element to the dataOutput div 
        dataOutput.append(adviceText)
    })