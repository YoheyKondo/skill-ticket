$(function(){
    about.init();
});
var about = {
    windowWidth:0,
    breakpoint:1023,
    init(){
        this.methods();
    },
    methods(){
        $(window).on('resize',function(){
            about.windowWidth = $(window).outerWidth();
            about.resizeMethods();
        });
        $(window).on('scroll',function(){
            about.fixed();
        });
        $('.modal').on('click', function(){
            if($('.Rsv').hasClass('show')){
                $('.Rsv').removeClass('show');
                $('.Rsv').addClass('hidden');
                $('.modal_bg_w').removeClass('active');
            }else{
                $('.Rsv').addClass('show');
                $('.Rsv').removeClass('hidden');
                $('.modal_bg_w').addClass('active');
           }
           return false;
        });
    },
    // selectMethods(w, mode=null){
    //     if(about.windowWidth<about.breakpoint){
    //         about.modal();
    //     }else{
    //         about.fixed();
    //     }
    // },
    resizeMethods(){
        //モーダル表示していた場合、閉じる
        if(about.windowWidth>about.breakpoint){
            if($('.Rsv').hasClass('show')){
                $('.Rsv').removeClass('show');
                $('.Rsv').addClass('hidden');
                $('.modal_bg_w').removeClass('active');
            }
        }
    },
    fixed(){
        //現在地の取得（Topからscrollした距離）
        var cur_pos = $(window).scrollTop();
        //header + path + Infoの高さ
        var offset = $('.path').eq(0).outerHeight(true)
                      + $('.Info').eq(0).outerHeight(true)
                      + $('header').outerHeight(true);

        //固定解除
        var stop = $('.maxwidth_set').eq(2).outerHeight(true)
                    + $('.border').eq(1).outerHeight(true);

        //review_listのbottomの位置
        var top = $('.review_list').offset().top;
        var bottom = top + $('.review_list').outerHeight();


        if(cur_pos+offset >= bottom){
            $('.Rsv').css('position','absolute');
            $('.Rsv').css('bottom',stop);
        }else{
            $('.Rsv').css('position','fixed');
            $('.Rsv').css('bottom','auto');
        }
    },
    modal(){
        // 画面の高さ、幅の取得
        let h = $(window).innerHeight();
        let w = $(window).outerWidth();

        // サイズ調整
        w = w - 100;
        h = h - 100;

        console.log(h + ' / ' + w);
        // CSS付与
        $('.Rsv').css('position','fixed');
        $('.Rsv').css('top','50%');
        $('.Rsv').css('bottom','auto');
        $('.Rsv').css('height',h);
        $('.Rsv').css('width',w);
    }
}