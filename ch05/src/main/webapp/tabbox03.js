// jQuery로 작성하기

$(function() {
    var $obj = $('li');
    $obj.click(function(){
        $(".selected")?.removeClass("selected")
        $(this).addClass("selected")       
    });    
});