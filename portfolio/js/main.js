$(document).ready(function(){

	// Switch button. You can go to the menu (three strips)
	$('.switch-btn').on('click', function(){
		$(this).toggleClass('active');
		if($(this).data('menu') === true)$('.menu-wrap').toggleClass('active');
	});


	//Colors for blog-card and title in the inner-blog
	function setBlogColorCard(){
		var blogColors = ['#d89595', '#a1cea2', '#b8bad6', '#f0ca84', '#d89595', '#a1cea2'],
			blogCards  = $('div.switch-colors');
			console.log(blogCards);
		for(var i = 0; i < blogCards.length; i++){
			if($(blogCards[i]).hasClass('item')){
				$(blogCards[i]).css('backgroundColor', blogColors[i])
					.find('.btn-default').attr('data-color', blogColors[i]);
			}else{
				$(blogCards[i]).find('.blog-card').css('backgroundColor', blogColors[i])
					.find('.btn-default').attr('data-color', blogColors[i]);
			}
		};
	};
	setBlogColorCard();

	if(localStorage.getItem('blogBg')){
		$('#blog-inner-title').css('backgroundColor',localStorage.getItem('blogBg'));
	};

	$('.blog-card .btn-default').on('click',function(e){
		// e.preventDefault();

		var color = $(this).data('color');
		localStorage.setItem('blogBg', color);
		console.log(color);
	});

	$('.button-down').on('click',function(){
		$('body,html').animate({scrollTop: $(window).height()+5}, '1200');
	});

	//scrolling for button-down
	$(document).on('scroll', function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.fixed-menu').addClass('active');
		} else {
			$('.fixed-menu').removeClass('active');
		};
	});
	
	$('.menu-wrap ul li a').on('click', function (e) {
		e.preventDefault();
		$('.switch-btn').click();
	    var id  = $(this).attr('href'),
	    	top = $(id).offset().top;
	  $('body,html').animate({scrollTop: top}, 1000);
	});

	//slider
	var sliderConfig = {
		navigation : false,
		slideSpeed : 1000,
		autoplay: false,
		navigation : true,
		navigationText : ["<i class='fa fa-angle-left'></i>", 
		"<i class='fa fa-angle-right'></i>"],
		gotofirst: true,
		paginationSpeed : 400,
		items : 3,
		itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false

	};
	 $('#owl-demo').owlCarousel(sliderConfig);


	$('.tab').click(function() {
		$('.svg-progress-skill').trigger("destroy");
		$('.tab').removeClass('tab-active disable-click').eq($(this).index()).addClass('tab-active disable-click');
		$('.tab-item').removeClass('active')
			.eq($(this).index()).addClass('active');
		if($(this).hasClass('skills')){
			$('.svg-progress-skill').trigger("redraw");
		}
	}).eq(0).addClass('tab-active');

	$('.svg-progress-skill').svgprogress({
	  figure: "rect",
	  emptyFill: "#ccc" ,
	  progressFillGradient: ['#2cbc99', '#fcbf02'],
	  progressWidth: 3
	});

	$('.icon-menu li').on('click', function() {
	  $('.icon-menu li').removeClass('active disable-click');
	  // var newClass = $(this).addClass('active disable-click').data('switcher');
	  // $(this).parents('section').attr('class','').addClass(newClass);
		  $(this).addClass('active disable-click')
			  .parents('section')
			  .attr('class','')
			  .addClass($(this).data('switcher'));
  });
	
	
	$('#clients-list').mixItUp();
	$('.filter-list .filter').on('click', function(){
		$('.filter-list .filter').removeClass('active disable-click');
		$(this).addClass('active disable-click');
	});

});

