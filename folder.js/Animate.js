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
var textElement = document.querySelector("#container");

// Add mousemove event listener
document.addEventListener("mousemove", function(event) {
  // Calculate the distance from the mouse pointer to the text element
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var textX = textElement.getBoundingClientRect().left + window.scrollX;
  var textY = textElement.getBoundingClientRect().top + window.scrollY;

  var distance = Math.sqrt(Math.pow(mouseX - textX, 2) + Math.pow(mouseY - textY, 2));

  // Change the visibility of the text based on the distance
  if (distance <= 200) 
  {
    textElement.style.visibility = "visible";
  } 
  else
  {
    textElement.style.visibility = "hidden";
  }
});
