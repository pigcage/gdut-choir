var width = $(window).width()/127//rem自适应
$('html').css('fontSize', width +'px');

window.onload=function(){
	var documentHeight = $(document).height();//文本高度
	var nav_pointer = $("#nav_pointer");
	var scroll = $(window).scrollTop();
	console.log(documentHeight);
	if(scroll > ($("header").height()+$(".topImg").height())){
			$("#nav").css("position","fixed");
			$("#nav").css("top","0px");
	}
	
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if(scroll > ($("header").height()+$(".topImg").height())){
			$("#nav").css("position","fixed");
			$("#nav").css("top","0px");
		}
		else{
			$("#nav").css("position","relative");
		}

		if (scroll>=0 && scroll<.325*documentHeight){
			nav_pointer.css("margin-left","0");
		}

		else if (scroll>.325*documentHeight && scroll<.51*documentHeight){
			nav_pointer.css("margin-left","25%");
		}

		else if(scroll>.51*documentHeight && scroll<.82*documentHeight){
			nav_pointer.css("margin-left","50%");
		}
		else {
			nav_pointer.css("margin-left","75%");
		}	
	});
}