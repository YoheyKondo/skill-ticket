$(function(){
    slick();
});

function slick(){
	$('.t_slider').slick({
		dots: true,
	    infinite: true,
    	slidesToShow: 2,
    	slidesToScroll: 1,
    	responsive:[{
    		breakpoint:1024,
    		settings:{
    			slidesToShow: 1,
    		}
    	}]
    });

	$('.c_slider').slick({
		dots: false,
    	slidesToShow: 2,
    	slidesToScroll: 1,
    	responsive:[{
    		breakpoint:1024,
    		settings:{
    			slidesToShow: 1,
    		}
    	}]
	});

	$('.p_slider').slick({
		dots: false,
    	slidesToShow: 2,
    	slidesToScroll: 1,
    	responsive:[{
    		breakpoint:1024,
    		settings:{
    			slidesToShow: 1,
    		}
    	}]

	});

	$('.r_slider').slick({
		dots: true,
	    infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1
	});

    /* About */
    $('.i_slider').slick({
        arrows:false,
        asNavFor:'.thumb',
    });

    $('.thumb').slick({
        asNavFor:'.slider',
        focusOnSelect: true,
        slidesToShow:3,
        slidesToScroll:1
    }); 

    $('.o_slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[{
            breakpoint:1024,
            settings:{
                slidesToShow: 1,
            }
        }]
    });

}