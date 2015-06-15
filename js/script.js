window.onload = function(){
	var header = document.getElementById("header");
	var oSpan = header.getElementsByTagName("span");
	var fir_ul = document.getElementById("fir_ul");
	var sec_ul = document.getElementById("sec_ul");
	oSpan[0].onmouseover = function(){
		fir_ul.style.display = "block";
		sec_ul.style.display = "none";
	};
	oSpan[1].onmouseover = function(){
		sec_ul.style.display = "block";
		fir_ul.style.display = "none";
	};
};