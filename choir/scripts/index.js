var width = $(window).width()//rem自适应
$('html').css('fontSize', width / 127 +'px');

window.onload=function(){
	$(window).scroll(function(){
		if($("body").scrollTop()>($("header").height()+$(".topImg").height())){
			$("#nav").css("position","fixed");
			$("#nav").css("top","0px");
		}
		else{
			$("#nav").css("position","relative");
		}
	});
	$(window).resize(function(){
		var width = $(window).width()//rem自适应
		$('html').css('fontSize', width / 127 +'px');
	})

}