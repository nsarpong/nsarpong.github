function throughImages(){
  var imageArray =
  ["https://i.pinimg.com/originals/ee/e0/50/eee0505d8b7a021e380e451654028b23.jpg",
   "https://i.pinimg.com/236x/c2/a5/df/c2a5df51c1ea128c6492c6cdf17e8494.jpg",
   "https://img.buzzfeed.com/buzzfeed-static/static/2019-06/6/11/campaign_images/buzzfeed-prod-web-06/24-funny-tweets-thatll-have-you-silently-wheezing-2-10129-1559833662-0_dblbig.jpg",
  ]
  var image = document.getElementById("memes")

  var i = 0
  setInterval(function(){
    if(i==imageArray.length){
      i = 0
    }
    image.src= imageArray[i]
    i++
  }, 5000)
}