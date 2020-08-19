var name = prompt("Enter Your Name")
var welcome = document.getElementById("welcome")
welcome.innerHTML ="Welcome " + name + " I hope you enjoy my about me page! "  

let myh1 = document.getElementById("text");


function changeText(){
  myh1.innerHTML = (myh1.innerHTML == "Welcome to my page") ? "I hope you learn more about me" : "Welcome to my page";
}

//Function to change Font size to 24px from 16px
function changeSize() {
  myh1.style.fontSize = (myh1.style.fontSize == "24px") ? "24px" : "30px";
}

function changeLetter() {
  myh1.style.color = (myh1.style.color == "orange") ?
  "blue" : "orange"
}



myh1.addEventListener("mouseover", changeText);
myh1.addEventListener("mouseleave", changeText);

myh1.addEventListener("mouseover", changeSize);
myh1.addEventListener("mouseleave", changeSize);


myh1.addEventListener("mousemove", changeLetter)


function changePicture(pictureNumber){
  var image = document.getElementById("myImage");
  if(pictureNumber === 1){
    image.src =
    "https://www.proofhub.com/wp-content/uploads/2018/04/New-Employees-the-Right-Way.jpg" 
  }else{
    image.src = 
    "https://img.freepik.com/free-vector/colorful-hand-drawn-welcome-landing-page_23-2148274061.jpg?size=626&ext=jpg"
    
  }

}

function submitForm(){
  var yourname = document.getElementById("yourname").value
  var school = document.getElementById("school").value

  if(yourname === "" && school=== "" ) {
    alert ("Please fill in form") 
  }else{
    alert ("Thank you for submitting")

  }
}