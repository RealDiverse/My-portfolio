/*let textChange;

document.querySelector("#container").style.visibility = "hidden";

textChange = document.querySelector("#container").addEventListener("mouseover", myFunction);
/*textChange = document.querySelector("#Name").addEventListener("click", mySecondFunction);
textChange = document.querySelector("#container").addEventListener("mouseout", myThirdFunction);


  function myFunction() 
  {
    document.querySelector("#link").style.visibility = "visible";
  }

function mySecondFunction() 
{
  document.querySelector("#Name").innerHTML = "Clicked!<br>";

}

function myThirdFunction() 
{
  document.getElementById("#container").innerHTML = "click here";
}
*/

// Get the text element
let textElement = document.querySelector("#container");

// Add mousemove event listener
document.addEventListener("mousemove", function(event) {
  // Calculate the distance from the mouse pointer to the text element
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let textX = textElement.getBoundingClientRect().left + window.scrollX;
  let textY = textElement.getBoundingClientRect().top + window.scrollY;

  let distance = Math.sqrt(Math.pow(mouseX - textX, 2) + Math.pow(mouseY - textY, 2));

  console.log(distance)
  // Change the visibility of the text based on the distance
  if (distance < 600) 
  {
    textElement.style.visibility = "visible";
  } 
  else 
  {
    textElement.style.visibility = "hidden";
  }
}); 


let textElementT = document.querySelector("#containerT");

// Add mousemove event listener
document.addEventListener("mousemove", function(eventT) {
  // Calculate the distance from the mouse pointer to the text element
  let mouseXt = eventT.clientX;
  let mouseYt = eventT.clientY;
  let textXt = textElementT.getBoundingClientRect().right + window.scrollX;
  let textYt = textElementT.getBoundingClientRect().bottom + window.scrollY;

  let distanceT = Math.sqrt(Math.pow(mouseXt - textXt, 2) + Math.pow(mouseYt - textYt, 2));

  console.log(distanceT)
  // Change the visibility of the text based on the distance
  if (distanceT > 1200 && distanceT < 1900 ) 
  {
    textElementT.style.visibility = "visible";
  } 
  else
  {
    textElementT.style.visibility = "hidden";
  }
}); 





// const currentOpacity = document.getElementsByName("href");

// function changeOpacity() {
//   if (currentOpacity.style.opacity === "0") {
//     currentOpacity.style.opacity = "1"; 
    
//   }else {
//     currentOpacity.style.opacity = "0";
//   }
// }



// let day = "Monday"; 

// switch (day) {
//   case "Monday": 
//   console.log("Happy Monday!")
//   break 
//   case "Tuesday": 
//   console.log("Second day of the week!")
//   break 
//   case "Wednesday": 
//   console.log("It's almost Friday!")
//   break 
//   case "Thursday":
//     console.log("It's almost Friday!")
//     break
//     case "Friday":
//       console.log("Happy Friday!")
//       break
//       case "Saturday":
//       case "Sunday":
//         console.log("It's the weekend!")
//         break 
//         default: 
//         console.log("Day not recognised, try again")
// }




// let age = 18;

// if (age <= 18) {
//   console.log(`Sorry I can't serve you`)
// }
// else {
//   console.log(`No problem, what would you like to drink?`)
// }

// let password = "Password";

// if (password.length >= 9)
// {
//   console.log(`your password is correct`)
// }
// else 
// {
//   console.log(`your password is incorrect`)
// }






/*
let num;

if (num %5 == 20 || num ) {

  console.log("This number is divisible by 3 or 5")
}
else {
  console.log(`This number isn't divisble by 3 or 5`)
}
*/

/*
let number = 2;

if (number >= 3) 
{
  console.log(`fizz`);
}

else if (number <= 1) 
{
  console.log(`buzz`);
}


else if (number == 2 || number >= 2) 
{

 console.log(`fizz buzz`)

}



let number1 = 10;

if (number1  %3 === 0 && number1 %5 === 0) 
{
   console.log ("fizz buzz")
}

else if (number1 %3 === 0){

   console.log ("fizz")
}

else if (number1 %5 === 0)
{
   console.log ("buzz")
}

else
{
   console.log (`${number1}`)
}

if (number) 
{

}*/


// task for today.
// arrays and loops dive into Palindrome.


function myFunction(x) {

  x.classList.toggle("change");
}


/*
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}*/