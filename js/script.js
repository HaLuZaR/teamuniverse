var downloadingImage = new Image();

downloadingImage.onload = function(){
  document.querySelector("#imgReport").src = this.src; 
  document.querySelector("#loading").style.opacity = "0";
  document.querySelector("#imgBlock").style.opacity = "1";
};

downloadingImage.src = "../src/May.jpg";