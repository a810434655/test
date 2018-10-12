//汉堡导航显示与隐藏
var num = 0;
function test(){
if(num % 2 == 0) {
		console.log("sss");
		$(".hanbaoerji").css("display", "block");
		num++;
	} else if(num % 2 == 1) {
		$(".hanbaoerji").css("display", "none");
		num++;
	}	
}
function haha(){
  window.location.reload();
}
