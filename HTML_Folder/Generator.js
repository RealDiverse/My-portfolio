const person = {
    "Name": "jim",
    "fast food": "food" 

}

let JSONArray = ["Red", "Green", "Blue"]
let JSONNested = [{"name": "James", "age": 35}, { "name": "Hannah", "age": 30}]

console.log(person)
console.log(JSONArray)
console.log(JSONNested[0].name)
 



let JSONString = `{
    "people" :[
        {"firstName": "David", "lastName": "Smith", "age": 27, "married": true}

    ]
}`


console.log(JSONString)

const JSONObject = JSON.parse(JSONString)
console.log(JSONObject.people[0].firstName)


// Parse - Takes a JSON String and parses it into a working JavaScript Object 

/*const JSONObjectString = JSON.stringify(JSONObject)
console.log(JSONObjectString)

const output = document.getElementById("output")
output.innerText = JSONObject.people[0].firstName

console.log(JSONObject.people[0].firstName)*/

// Selecting the required elements from the DOM 

// Selecting the required elements from the DOM 
let password = document.getElementById('password')
let generateBtn = document.getElementById('generateBtn')
let copyBtn = document.getElementById('copyBtn')

function generatePassword() {
    // Declaring a character variable to store a string of characters that we will make our password from
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // Defining a value for the length we want our password to be
    let passwordLength = 12
    // Declare an empty string that will be assigned the value of our randomly generate password
    let passwordString = ""
    // Loop through our characters string however many times our passwordLength dictates
    for (let i = 0; i < passwordLength; i++) {
        // Generate a random number to represent the index of the letter we want to randomly select from our characters string
        let randomNumber = Math.floor(Math.random() * characters.length)
        // Take the random number and grab the letter from its index and add it to our passwordString
        passwordString += characters.substring(randomNumber, randomNumber + 1)        
    
    }
    // Set the value of our password element to the passwordString
    password.value = passwordString
}

function copyPassword() {
    // Copy the value of the password element to the clipboard
    navigator.clipboard.writeText(password.value)
    // Window alert to confirm the item being copied to clipboard
    alert("Password Copied to Clipboard")
}

// Calling the generatePassword function on button click
generateBtn.addEventListener('click', generatePassword)
// Call the copyPassword function on button click
copyBtn.addEventListener('click', copyPassword)



