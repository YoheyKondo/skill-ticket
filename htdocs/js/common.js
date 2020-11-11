$(function(){

	var textHeight = $('.t_ex').height();/*全文表示時の高さ*/
    var lineHeight = parseFloat($('.t_ex').css('line-height'));
    var lineNum = 13;
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
});

