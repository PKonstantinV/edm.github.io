function changeImage() {
  var image = document.getElementById("changeimage");
  
  if (image.src.match("l2")) {
    image.src = "image/maxresdefault.jpg";
  } 
    else { 
    image.src = "image/l2.jpg";   
  }  
}
/*player img change*/

function changePlayerImage() {
  var image = document.getElementById("zoom");
  
  if (image.src.match("imgonline-com-ua-PicOnPic-stH1eNq5ia35h")) {
    image.src = "image/MGC.jpg";
  } 
    else { 
    image.src = "image/imgonline-com-ua-PicOnPic-stH1eNq5ia35h.png";   
  }  
}
function changePlayerImage2() {
  var image = document.getElementById("zoom");
  
  if (image.src.match("MGC")) {
    image.src = "image/imgonline-com-ua-PicOnPic-stH1eNq5ia35h.png";
  } 
    else { 
    image.src = "image/imgonline-com-ua-PicOnPic-stH1eNq5ia35h.png";   
  }  
}function changePlayerImage3() {
  var image = document.getElementById("zoom1");
  
  if (image.src.match("imgonline-com-ua-PicOnPic-bnXNTMJqRKdM")) {
    image.src = "image/LFM.jpg";
  } 
    else { 
    image.src = "image/imgonline-com-ua-PicOnPic-bnXNTMJqRKdM.png";   
  }  
}
function changePlayerImage4() {
  var image = document.getElementById("zoom1");
  
  if (image.src.match("LFM")) {
    image.src = "image/imgonline-com-ua-PicOnPic-bnXNTMJqRKdM.png";
  } 
    else { 
    image.src = "image/imgonline-com-ua-PicOnPic-bnXNTMJqRKdM.png";   
  }  
}

/*function changePlayerImage5() {
  var image = document.getElementById("zoom2");
  
  if (image.src.match("imgonline-com-ua-PicOnPic-BnohZ1dW2epHd")) {
    image.src = "image/images.jpg";
  } 
    else { 
    image.src = "image/imgonline-com-ua-PicOnPic-BnohZ1dW2epHd.png";   
  }  
}
function changePlayerImage6() {
  var image = document.getElementById("zoom2");
  
  if (image.src.match("")) {
    image.src = "";
  } 
    else { 
    image.src = "";   
  }  
}*/

var activeSong;
function stopSong(){
  activeSong.currentTime = 0;
  activeSong.pause();
}