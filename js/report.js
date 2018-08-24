var sidebar = document.getElementById('sidebar');
var imgReport = document.getElementById("imgReport");
var loading = document.getElementById("loading");

var x;

function ChangeImage(name, first) {
	loading.style.visibility = "visible";
	imgReport.style.opacity = "0";
	loading.style.opacity = "1";

	var downloadingImage = new Image();
	downloadingImage.onload = function(){
    x = this.src; 
    if (first){
		imgReport.src = x;
		loading.style.opacity = "0";
    }

    };

	downloadingImage.src = "src/" + name +".jpg";
    setTimeout(function(){ 
    	loading.style.opacity = "0";
    	loading.style.visibility = "hidden";
    	imgReport.src = x;
    	imgReport.style.opacity = "1";  }, 750);

}


ChangeImage("July", true);


sidebar.addEventListener("mouseover", function (event) {
  sidebar.style.left = "0";
});

sidebar.addEventListener("mouseout", function (event) {
  sidebar.style.left = "-270px";
});