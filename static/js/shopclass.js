//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function clearHistroy(){
	setCookie('ECS[keywords]', '', -1);
	document.getElementById("search_histroy").style.visibility = "hidden";
}


$(function($){
    $('#sidebar ul li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        var index = $(this).index();
        $('.j-content').eq(index).show().siblings('.j-content').hide();
    })
})