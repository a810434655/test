   $(function(){
    $(".d1").eq(0).removeClass("touming");	
	$(".d1").eq(0).addClass("fadeInUp");	
	
window.onscroll=function(){
	var myHeight=document.documentElement.scrollTop;
	console.log(myHeight);
	if(myHeight>=400){
	$(".d1").eq(1).removeClass("touming");	
	$(".d1").eq(1).addClass("fadeInUp");
	}
	if(myHeight>=600){
	$(".d1").eq(2).removeClass("touming");	
	$(".d1").eq(2).addClass("fadeInUp");
	}
	if(myHeight>=800){
	$(".d1").eq(3).removeClass("touming");	
	$(".d1").eq(3).addClass("fadeInUp");
	}
	if(myHeight>=900){
	$(".d1").eq(4).removeClass("touming");	
	$(".d1").eq(4).addClass("fadeInUp");
	}
}	
})
