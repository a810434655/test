$(function(){
 $(".img1").addClass("fadeInUp");	
	
})


window.onscroll=function(){
	var myHeight=document.documentElement.scrollTop;
	console.log(myHeight);
	if(myHeight>=460){
	$(".contenr-top").addClass("dingwei");
	}
	if(myHeight<450){
	$(".contenr-top").removeClass("dingwei");
	}
    if(myHeight>=100){
    $(".conten-neirong").addClass("fadeInUp");
    }
    if(myHeight>=400){
    $(".font").eq(0).addClass("fadeInUp");
    }
    if(myHeight>=900){
    $(".font").eq(1).addClass("fadeInUp");
    }
    if(myHeight>=1000){
    $(".font").eq(2).addClass("fadeInUp");
    }
    if(myHeight>=1100){
    $(".font").eq(3).addClass("fadeInUp");
    }
    if(myHeight>=1600){
    $(".img2").addClass("fadeInUp");
    }
    if(myHeight>=2200){
    $(".qq").addClass("fadeInUp");
    }
    if(myHeight>=2400){
    $(".ditu").addClass("fadeInUp")
    }
}