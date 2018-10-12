function ajx() {
	var _this = this;
	this.ajxs = function(num1, num2, data) {
			$.ajax({
				type: "POST",
				url: "http://airinfo.market.alicloudapi.com/airInfos",
				dataType: "json",
				data: {
					arrive_code: num1,
					leave_code: num2,
					query_date: data
				},
				success: function(msg) {
					var a = [];
					a.push(msg);
					console.log(a[0].flightInfos.length)

					for(var i = 0; i < a[0].flightInfos.length; i++) {
						console.log(i);
						a[0].flightInfos[i].lowestPriceInfo.standardPrice = i;
					}
					console.log(a);
					if(msg.msg != "查询成功!") {
						alert("失败，请重新选择城市")
					} else {
						var index=window.localStorage.getItem("index");
						var html = template("list", a[0]);
						document.getElementById("xuanran").innerHTML = html;
					}
				},
				beforeSend: function(xhr) {
					xhr.setRequestHeader("Authorization", "APPCODE 9feeee069b944b1ab9e04e1f2a6afe7c");
					console.log("速度刷新");
					$(".login").css("display", "block");
				},
				error: function(e) {
					alert("失败", e);
				},
				complete: function() {
					$(".login").css("display", "none");
				}
			});

		}
}