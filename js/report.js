function ChangeImage(name) {
	document.querySelector("#imgBlock").style.opacity = "0";
	document.querySelector("#loading").style.display = "block";

	var downloadingImage = new Image();
	downloadingImage.onload = function(){
    document.querySelector("#imgReport").src = this.src; 
    document.querySelector("#loading").style.display = "none";
    document.querySelector("#imgBlock").style.opacity = "1";
    };

	downloadingImage.src = "src/" + name +".jpg";
}

ChangeImage("July");

var sidebar = document.getElementById('sidebar');

sidebar.addEventListener("mouseover", function (event) {
  sidebar.style.left = "0";
});

sidebar.addEventListener("mouseout", function (event) {
  sidebar.style.left = "-270px";
});