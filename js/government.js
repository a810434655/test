$(function(){
$(".contenr-top").addClass("fadeInUp");
$(".img1").addClass("fadeInUp");
})

window.onscroll=function(){
	var myHeight=document.documentElement.scrollTop;
	console.log(myHeight);	
	if(myHeight>=50){
	$(".conten-neirong").addClass("fadeInUp");
	}
	if(myHeight>=800){
	$(".conten").eq(1).addClass("fadeInUp");
	$(".img2").addClass("fadeInUp");
	$(".font").eq(0).addClass("fadeInUp");
	}
	if(myHeight>=1900){
	$(".gongwuyuanka").eq(0).addClass("fadeInUp");
	$(".gongwuyuanka").eq(1).addClass("fadeInUp");
	}
	if(myHeight>=2100){
	$(".gongwuyuanka").eq(2).addClass("fadeInUp");	
	}
	
	
	
//	改变样式
	if(myHeight>=460){
	$(".contenr-top").addClass("dingwei");
	}
	if(myHeight<450){
	$(".contenr-top").removeClass("dingwei");
	}
	if(myHeight>=0 && myHeight<=1100){
	for(var i=0;i<=$(".erji-nav a").length;i++){
	$(".erji-nav a").eq(i).removeClass("act-blue");
	}
    $(".act1").addClass("act-blue");
}
	if(myHeight>=1100 && myHeight<=2379){
	for(var i=0;i<=$(".erji-nav a").length;i++){
	$(".erji-nav a").eq(i).removeClass("act-blue");
	}
     $(".act2").addClass("act-blue");
    }
	if(myHeight>=2379){
	for(var i=0;i<=$(".erji-nav a").length;i++){
	$(".erji-nav a").eq(i).removeClass("act-blue");
	}
     $(".act3").addClass("act-blue");
    }
	
}