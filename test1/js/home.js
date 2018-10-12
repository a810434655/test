//初始化全屏插件
$(function() {
	$('#dowebok').fullpage({
		'navigation': true,
		slidesNavigation: "true",
		scrollingSpeed:"300",
		afterLoad: function(anchorLink, index) {
			console.log(index);
			if(index==2){
			$(".TMC").eq(0).addClass("fadeInUp");
			}
			if(index==3){
			$(".jianjie").eq(0).addClass("fadeInRight");
			}
			if(index==4){
			$(".TMC").eq(1).addClass("fadeInUp");	
			}
			if(index==5){
			$(".TMC").eq(2).addClass("fadeInUp");
			}
			if(index==6){
			$(".TMC").eq(3).addClass("fadeInUp");
			}
		},
		afterSlideLoad: function(anchorLink, index, slideIndex) {
			if(slideIndex == 0) {
				$(".carousel-caption").eq(0).addClass("fadeInUp");
			}
			if(slideIndex == 1) {
				console.log(slideIndex)
				$(".carousel-caption").eq(1).addClass("fadeInUp");
			}
			if(slideIndex == 2) {
				console.log(slideIndex)
				$(".carousel-caption").eq(2).addClass("fadeInUp");
			}
			if(slideIndex == 3) {
				console.log(slideIndex)
				$(".carousel-caption").eq(3).addClass("fadeInUp");
			}
		},
		onSlideLeave: function(index, direction, slideIndex) {
			if(slideIndex == 0) {
				$(".carousel-caption").eq(0).removeClass("fadeInUp");
			}
			if(slideIndex == 1) {
				$(".carousel-caption").eq(1).removeClass("fadeInUp");
			}
			if(slideIndex == 2) {
				$(".carousel-caption").eq(2).removeClass("fadeInUp");
			}
			if(slideIndex == 3) {
				$(".carousel-caption").eq(3).removeClass("fadeInUp");
			}
		}
	});
});


//轮播控制
setInterval(function() {
	$.fn.fullpage.moveSlideRight();
}, 6000);