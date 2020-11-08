/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

var time = prompt("enter the time using international time");
  if (time >= 1 && time <= 12){
    document.getElementById("time").innerHTML = 
      "Good Morning"
  }
  
  else if 
    (time >= 13 && time <= 17){
    document.getElementById("time").innerHTML = 
      "Good afternoon"
  }
  else {
    document.getElementById("time").innerHTML = 
      "Good evening"
  }