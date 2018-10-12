function openwind() {
		//点击搜索后取得Input里面的值然后判断数组对应的城市编码
		var chufa = document.querySelectorAll(".inpu")[0].value;
		var mubiao = document.querySelectorAll(".inpu")[1].value;
		var chufashijian = document.querySelectorAll(".inpu")[2].value;
		var fanchengshijian = document.querySelectorAll(".inpu")[3].value;
		window.localStorage.setItem("kaishi", chufa);
		window.localStorage.setItem("jieshu", mubiao);
		if(chufa != "" && mubiao != "" && chufashijian != "") {
			var chufala = arr.indexOf(chufa);
			var mubiaoa = arr.indexOf(mubiao);
			var num1 = list[chufala];
			var num2 = list[mubiaoa];
			console.log(num1, num2);
			if(fanchengshijian != "") {
				window.localStorage.setItem("num1", num1);
				window.localStorage.setItem("num2", num2);
				window.localStorage.setItem("chufashijian", chufashijian);
				window.localStorage.setItem("fanchengshijian", fanchengshijian);
			} else {
				window.localStorage.removeItem("fanchengshijian");
				window.localStorage.setItem("num1", num1);
				window.localStorage.setItem("num2", num2);
				window.localStorage.setItem("chufashijian", chufashijian);
				var hash=window.location.hash;
				$(".jipiao").trigger("click");
				window.location.hash="#jipiao";
			}

		} else {
			alert("日期不能为空")
		}
	}