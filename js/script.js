var downloadingImage = new Image();

downloadingImage.onload = function(){
  document.querySelector("#universelogo").src = this.src; 
  document.querySelector("#content").style.opacity = "1";
};

downloadingImage.src = "src/logo.png";