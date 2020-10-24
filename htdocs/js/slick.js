function slick(){
	console.log("Slick")
	$('.t_slider').slick({
		dots: true,
	    infinite: true,
    	slidesToShow: 2,
    	slidesToScroll: 1,
    	centerMode:true,
    	centerPadding:'0px',
    	responsive:[{
    		breakpoint:1023,
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
    		breakpoint:1023,
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
    		breakpoint:1023,
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

}