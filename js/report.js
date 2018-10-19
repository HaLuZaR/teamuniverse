var sidebar = document.getElementById('sidebar');
var imgReport = document.getElementById("imgReport");
var loading = document.getElementById("loading");

var downloadingImage = new Image();

downloadingImage.onload = function(){

	setTimeout(function(){
		imgReport.data = downloadingImage.src;
	}, 750);

	setTimeout(function(){
		loading.style.opacity = 0;
		imgReport.style.opacity = 1;
	}, 1000);

	setTimeout(function(){
		loading.style.visibility = "hidden";
	}, 1250);

	$("html, body").animate({ scrollTop: 0 }, "slow");
}

function ChangeImage(name) {
	loading.style.visibility = "visible";
	imgReport.style.opacity = "0";
	loading.style.opacity = "1";

	downloadingImage.src = "src/" + name +".jpg";
}

ChangeImage("August", true);