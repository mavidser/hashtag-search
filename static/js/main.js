function setWidth(a) {
    var width = 0
    a.each(function () {
        var par=a.parent()
        thisWidth = par.width()
        $(this).width(thisWidth)
    })
};

$(document).ready(function () {
    $(".panel-body, p, pre, strong, em").each(function() {
        var text = $(this).html();
        pattern = /[^>]#[A-Za-z0-9]+/g
        tag = ""

        while(tag = pattern.exec(text)){
            replacement="<a class='hashtag' href='/?query="+tag.toString().substring(2)+"'>"+tag.toString().substring(1)+"</a> "
            text = text.replace(tag.toString(),replacement);
        }
        $(this).html(text);
    });
    setWidth($(".posts-inner"));
});

$(window).resize(function () {
    setWidth($(".posts-inner"));
});

fbPosbottom=$('.fb-outer').offset().top+$('.fb-outer').height();
gpPosbottom=$('.gp-outer').offset().top+$('.gp-outer').height();
igPosbottom=$('.ig-outer').offset().top+$('.ig-outer').height();
twPosbottom=$('.tw-outer').offset().top+$('.tw-outer').height();
gnPosbottom=$('.gn-outer').offset().top+$('.gn-outer').height();

$(window).scroll(function(){
    maxPosbottom=Math.max(fbPosbottom,gpPosbottom,igPosbottom,twPosbottom,gnPosbottom)
    var scrollBottom = $(window).scrollTop() + $(window).height();
    console.log(scrollBottom+' '+fbPosbottom)
    if(scrollBottom >= fbPosbottom && fbPosbottom!=maxPosbottom){
        $('.fb-outer').css('position','fixed').css('bottom','0');
    } else {
        $('.fb-outer').css('position','relative');
    }
    if(scrollBottom >= gpPosbottom && gpPosbottom!=maxPosbottom){
        $('.gp-outer').css('position','fixed').css('bottom','0');
    } else {
        $('.gp-outer').css('position','relative');
    }
    if(scrollBottom >= igPosbottom && igPosbottom!=maxPosbottom){
        $('.ig-outer').css('position','fixed').css('bottom','0');
    } else {
        $('.ig-outer').css('position','relative');
    }
    if(scrollBottom >= twPosbottom && twPosbottom!=maxPosbottom){
        $('.tw-outer').css('position','fixed').css('bottom','0');
    } else {
        $('.tw-outer').css('position','relative');
    }
    if(scrollBottom >= gnPosbottom && gnPosbottom!=maxPosbottom){
        $('.gn-outer').css('position','fixed').css('bottom','0');
    } else {
        $('.gn-outer').css('position','relative');
    }
});
