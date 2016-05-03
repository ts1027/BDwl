$(function(){
	var img=$(".goods-block li:nth-of-type(1)~li img");
	img.hover(function(){
		$(this).animate({right:"+=15"},90)
	},function(){
		$(this).animate({right:14},90)
	})

	// 轮播
	var banner=$(".home-banner-wrapper li");
	var ul=$(".home-banner-wrapper");
		

})