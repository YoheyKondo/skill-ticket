function slick(){
	console.log("Slick")
	$('.t_slider').slick({
		dots: true,
	    infinite: true,
    	slidesToShow: 2,
    	slidesToScroll: 1
	});

	$('.c_slider').slick({
		dots: false,
    	slidesToShow: 2,
    	slidesToScroll: 1
	});

	$('.r_slider').slick({
		dots: true,
	    infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1
	});

}