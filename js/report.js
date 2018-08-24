var sidebar = document.getElementById('sidebar');
var imgReport = document.getElementById("imgReport");
var loading = document.getElementById("loading");

var downloadingImage = new Image();

downloadingImage.onload = function(){

	imgReport.src = this.src;

	setTimeout(function(){
		loading.style.opacity = 0;
		imgReport.style.opacity = 1;
	}, 500);

	setTimeout(function(){
		loading.style.visibility = "hidden";
	}, 1000);
}


function ChangeImage(name) {
	loading.style.visibility = "visible";
	imgReport.style.opacity = "0";
	loading.style.opacity = "1";

	downloadingImage.src = "src/" + name +".jpg";
}


ChangeImage("July", true);


sidebar.addEventListener("mouseover", function (event) {
  sidebar.style.left = "0";
});

sidebar.addEventListener("mouseout", function (event) {
  sidebar.style.left = "-270px";
});