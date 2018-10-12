function kaishi(){
	var _this=this;
	this.panduan=function(hash){
			//如果hash值为空，返回defaultHash，不为空则返回hash
//			hash=hash==""?defaultHash:hash;
            var defaulthash="index";
			if(hash==""){
				hash=defaulthash;
			}
			console.log(hash);
			switch(hash){
				case "index":
					_this.ax("ziyemian/shouye.html");
				break;
				case "travel":
					_this.ax("ziyemian/travel.html");
				break;
				case "enterprise":
					_this.ax("ziyemian/enterprise.html");
				break;
				case "ticket":
					_this.ax("ziyemian/ticket.html");
				break;
				case "jipiao/dingdan":
					_this.ax("ziyemian/dingdan.html");
				break;
				case "jipiao":
					_this.ax("ziyemian/jipiao.html");
				break;
				case "government":
					_this.ax("ziyemian/government.html");
				break;
				case "xinwendongtai":
					_this.ax("ziyemian/xinwendongtai.html");
				break;
				case "regard":
					_this.ax("ziyemian/regard.html");
				break;
				case "pay":
					_this.ax("ziyemian/Pay.html");
				break;
				case "jipiao/dingdan/zhifu":
					_this.ax("ziyemian/zhifu.html");
				break;
				case "jipiao/dingdan/zhifu/wancheng":
					_this.ax("ziyemian/wancheng.html");
				break;
				
			}
	},
	this.ax=function(path){
	   $.ajax({
				type: "get",
				url: path,
				success: function(res) {
					$(".haha").html(res);
				}
	   });
	}	
	}