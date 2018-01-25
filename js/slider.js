
//用jQuery改造轮播图，主要用到了$.animate,$.eq方法,$.css方法以及$.each方法。大致内容不用改变。
	var arr=["../Img/indexImgs/banner1.jpg","../Img/indexImgs/banner2.jpg","../Img/indexImgs/banner3.jpg","../Img/indexImgs/banner4.jpg","../Img/indexImgs/banner5.jpg"];
	var ord = 0;
	var myTimer = null;

	function autoPlay(){
		myTimer = setInterval(function(){
			var outOrd = ord;
			ord++;
			if(ord>arr.length-1){
				ord = 0;
			}
			//获取box中所有的img
			let $imgs = $("#bannerSilder img");
			//用jQuery对象的animate方法实现照片的轮换。
			$imgs.eq(outOrd).animate({"opacity":0},500);
			$imgs.eq(ord).animate({"opacity":1},500);
			//用jQuery对象的css方法改变btns的颜色。
			$("#btns li").eq(ord).css({"backgroundColor":"blue"}).siblings().css({"backgroundColor":"yellow"});
		},1500);
	}
	function stopPlay(){
		window.clearInterval(myTimer);
	}
	//跳转到指定的图片
	function goImg(transOrd){
		let outOrd = ord;
		ord = transOrd;
		//获取所有的img对象
		let $imgs = $("#bannerSilder img");
		//用jQuery对象的animate方法实现照片的轮换。
		$imgs.eq(outOrd).animate({"opacity":0},500);
		$imgs.eq(ord).animate({"opacity":1},500);
		//用jQuery对象的css方法改变btns的颜色。
		$("#btns li").eq(ord).css({"background-color":"blue"}).siblings().css({"background-color":"yellow"});
	}

	//初始化界面
	function initUI(){
		//把img添加到box中
		for(var i=0;i<arr.length;i++){
			$("#bannerSilder").prepend("<img />");
			//用each方法给每个img的src属性赋值
			$("#bannerSilder img").each(function(i){
				this.src = "../Img/indexImgs/banner"+(i+1)+".jpg";
			});
			//把li添加到ul中
			$("#btns").append("<li></li>");
		}

		$("#btns li").eq(0).css({"background-color":"blue"});
		$("#leftArrow").css("display","none");
		$("#rightArrow").css("display","none");
	}
	//初始化事件
	function initEvent(){
		$("#bannerSilder").mouseenter(function(){
			$("#leftArrow").css("display","block");
			$("#rightArrow").css("display","block");
			stopPlay();
		});
		$("#bannerSilder").mouseleave(function(){
			$("#leftArrow").css("display","none");
			$("#rightArrow").css("display","none");
			autoPlay();
		});
		$("#btns li").click(function(){
			goImg($(this).index());
		});
		$("#leftArrow").click(function(){
			let transOrd = ord-1;
			transOrd = transOrd<0?arr.length-1:transOrd;
			goImg(transOrd);
		});
		$("#rightArrow").click(function(){
			let transOrd = ord+1;
			transOrd = transOrd>arr.length-1?0:transOrd;
			goImg(transOrd);
		});
	}