$(function(){
    about.init();
});

var about = {
    windowWidth:0,
    breakpoint:749,
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
        });
    },
    selectMethods(w, mode=null){
        if(about.windowWidth<about.breakpoint){
            about.modal();
        }else{
            about.fixed();
        }
    },
    resizeMethods(){
        if(about.windowWidth<about.breakpoint){
            $('.Rsv').removeClass('show');
            $('.Rsv').addClass('hidden');
        }
    },
    fixed(){
        //現在地の取得（Topからscrollした距離）
        var cur_pos = $(window).scrollTop();
        //予約画面高さ
        var height = $('.maxwidth_set').eq(0).outerHeight(true)
                        - $('.path').eq(0).outerHeight(true);

        //固定解除
        var stop = $('.maxwidth_set').eq(2).outerHeight(true)
                    + $('.border').eq(1).outerHeight(true);
        //現在地
        var top = $('.review_list').offset().top;
        var bottom = top + $('.review_list').outerHeight();
        var offset = 714;
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