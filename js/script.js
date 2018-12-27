//控制搜索div的显示与隐藏
function seachAction(){
	$( '#seach').toggle();
	if($('#seach').css('display')=='none'){
		$('#seachSpan').attr('class','layui-icon layui-icon-search');
		$('#seachSpanMove').attr('class','layui-icon layui-icon-search nav-seach');
	}else{
		$('#seachSpan').attr('class','layui-icon layui-icon-close');
		$('#seachSpanMove').attr('class','layui-icon layui-icon-close nav-seach');
	}	
}
//控制屏幕缩小时改变nav样式
function showNav(){
    $("#navMain").toggle();
	$("#navMain").attr("class","nav-main-move");
	$(".move-i").css('display','none'); 
}
function hideNav(){
	$(".nav-main-move").toggle();
}