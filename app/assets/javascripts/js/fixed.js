$(function(){

    $(document).ready(function(){
        fixed();
    });

    $(window).on('resize',function(){
        fixed();
    });

    // スクロールしたら
     $(window).on('scroll',function(){
        fixed();
     });
});

function fixed(){
    //現在地の取得（Topからscrollした距離）
    var cur_pos = $(this).scrollTop();
    //予約画面高さ
    var height = $('.maxwidth_set').eq(0).outerHeight(true)
                    - $('.path').eq(0).outerHeight(true);

    //固定解除
    var stop = $('.maxwidth_set').eq(2).outerHeight(true)
                +$('.border').eq(1).outerHeight(true);
    //現在地
    var top = $('.review_list').offset().top;
    var bottom = top + $('.review_list').outerHeight();
    var offset = 714;


    console.log(cur_pos);
    console.log(top);
    console.log(bottom);

    console.log(height);


    if(cur_pos + offset >= bottom){
        $('.Rsv').css('position','absolute');
        $('.Rsv').css('top','auto');
        $('.Rsv').css('bottom',stop);
        $('.Rsv').css('height',height);
    }else{
        $('.Rsv').css('position','fixed');
        $('.Rsv').css('top',184);
        $('.Rsv').css('bottom','auto');
        $('.Rsv').css('height',height);
    }

}