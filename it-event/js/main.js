$(document).ready(function(){

    //flip Clock:
  var dt = "August 23 2018 11:00:00";
  var first = new Date(dt);
  var last = Date.now();
  var remaining = first - last;
  remaining /=1000;

  var clock = $(".clock").FlipClock({
    clockFace : "DailyCounter",
    autoStart : false,
    language: 'en',
    countdown: true,
    showSeconds: $(window).width() > 768 ? true : false,
    callbacks : {
      stop : function(){
        $(".message").html("Время окончено. Регистрация закрыта!");
      }
    }
  });

  clock.setTime(remaining);
  clock.setCountdown(true);
  clock.start();

  $('.animation-arrow').on('click',function(){
    $('body,html').animate({scrollTop: $(window).height()+5}, '1200');
  });

  //  Switch button. You can go to the menu (three strips)
  $('.burger-btn').on('click', function(){
    $(this).toggleClass('active');
      if($(this).data('menu') === true)$('.burger-menu').toggleClass('active');
  });

  $('.burger-menu ul li a').on('click', function (e) {
    e.preventDefault();
    $('.burger-btn').click();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  //Popup:
  $('.popup-btn').click(function(){ 
    var popupBlock = $('#'+$(this).data('popup'));
    popupBlock.addClass('active')
      .find('.fade-out').click(function(){
        popupBlock.css('opacity','0').find('.popup-content').css('margin-top','350px');        
        setTimeout(function(){
          $('.popup').removeClass('active');
          popupBlock.css('opacity','').find('.popup-content').css('margin-top','');
        }, 600);
      });
 });

  //show wrap-menu after scrolling:
  $(document).on('scroll', function() {
    if ($(this).scrollTop() > $(window).height()) {
      $('.fixed-menu').addClass('active');
    } else {
      $('.fixed-menu').removeClass('active');
    };
  });

    $('.fixed-nav-menu ul li a').on('click', function (e) {
    e.preventDefault();
      var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  //waypoints
  //down
  $('.wp-zone').waypoint(function(direction) {
  if (direction === 'down') {
    $('nav a').removeClass('disable-click');
    // form the selector dynamically.
    // "this" keyword refers waypoint object and the element is located at "this.element"
    // using "this.element.id", get the nav anchor you want to target
    // example: "nav a[href='#landing']"
    var selector = "nav a[href='#" + this.element.id + "']"; 
    $(selector).addClass('disable-click');
  }
  }, {
  offset: '30%'
});
//up
  $('.wp-zone').waypoint(function(direction) {
    if (direction === 'up') {
      $('nav a').removeClass('disable-click');
      var selector = "nav a[href='#" + this.element.id + "']"; 
      $(selector).addClass('disable-click');
    }
  }, {
    offset: '-30%'
}); 
  
  //Tabs for shedule
  $('.group-menu li').click(function() {
  $('.group-menu li').removeClass('disable-click');
  $(this).addClass('disable-click');
  $('#clients-list .tabs-wrap').hide();
  var tab = $(this).data('filter');
  $('#clients-list .tabs-wrap[data-index=' + tab + ']').fadeIn(600).show();
});

  //slider
  var sliderConfig = {
    navigation : false,
    slideSpeed : 1000,
    autoPlay: true,
    autoPlayTimeout:1500,
    autoPlayHoverPause:true,
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    gotofirst: true,
    paginationSpeed : 2000,
    items : 1,
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false
  };
 $('#owl-demo-1').owlCarousel(sliderConfig);

  var sliderConfig = {
    slideSpeed : 1000,
    autoPlay: true,
    autoPlayTimeout:1000,
    autoPlayHoverPause:true,
    navigation : false,
    gotofirst: true,
    paginationSpeed : 2000,
    pagination: false,
    items : 1,
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false
  };
 $('#owl-demo-2').owlCarousel(sliderConfig);

  //E-mail Ajax Send
  $(".meeting-reg").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});