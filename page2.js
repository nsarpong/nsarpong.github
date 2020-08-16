var amountOfLikes = 0

function handleLike(){
  amountOfLikes++
  console.log(amountOfLikes)
var likesDisplay = document.getElementById('likes')

likesDisplay.innerHTML = amountOfLikes
}
