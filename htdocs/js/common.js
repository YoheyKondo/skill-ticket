$(function(){

	// 「もっと読む」対応
	var textHeight = $('.t_ex').height();/*全文表示時の高さ*/
    var lineHeight = parseFloat($('.t_ex').css('line-height'));
    var lineNum = 5;
    var textNewHeight = lineHeight * lineNum;


	if (textHeight > textNewHeight) {
		$('.t_ex').css({ /*高さ超えた行は隠す*/
			'height': textNewHeight,
			'overflow':'hidden'
		});
		$('.readmore_btn').show();/*ボタン表示*/
		$('.readmore_btn').click(function() {
			$(this).hide(); /*非表示*/
			$('.t_ex').css({
				'height': textHeight,
				'overflow': 'visible'
			});
			return false;
		});
	};


	// ページネーション
	if(window.matchMedia("(max-width:749px)").matches){
		var pagePrev = $('.prev').text();
		var pageNext = $('.next').text();

		resultPrev = pagePrev.replace("前の20件","<");
		resultNext = pageNext.replace("次の20件",">");

		$('.prev').text(resultPrev);
		$('.next').text(resultNext);
	}
	$(window).resize(function(){
		var w = $(window).width();
		if(w <= 749){
			var pagePrev = $('.prev').text();
			var pageNext = $('.next').text();

			resultPrev = pagePrev.replace("前の20件","<");
			resultNext = pageNext.replace("次の20件",">");

			$('.prev').text(resultPrev);
			$('.next').text(resultNext);
		}else{
			var pagePrev = $('.prev').text();
			var pageNext = $('.next').text();

			resultPrev = pagePrev.replace("<","前の20件");
			resultNext = pageNext.replace(">","次の20件");

			$('.prev').text(resultPrev);
			$('.next').text(resultNext);			
		}
	});


});

