// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// refine the css code.
// refine the javascript code.
// refine html markup. 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
$(document).ready(()=>{
	// Header Typing Effect:
	// let typed = new Typed('.typed span', {
	//   strings: ["helping you find your talent <em>easily</em>."],
	//   typeSpeed: 50
	// });

	// Header Gooey Button:
	$('.button--bubble').each(function() {
	  let $circlesTopLeft = $(this).parent().find('.circle.top-left');
	  let $circlesBottomRight = $(this).parent().find('.circle.bottom-right');

	  let tl = new TimelineLite();
	  let tl2 = new TimelineLite();

	  let btTl = new TimelineLite({ paused: true });

	  tl.to($circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
	  tl.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
	  tl.to($circlesTopLeft.eq(1), 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
	  tl.to($circlesTopLeft.eq(2), 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
	  tl.to($circlesTopLeft.eq(0), 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
	  tl.to($circlesTopLeft.eq(1), 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
	  tl.to($circlesTopLeft.eq(2), 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');

	  let tlBt1 = new TimelineLite();
	  let tlBt2 = new TimelineLite();
	  
	  tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
	  tlBt1.add(tl);

	  tl2.set($circlesBottomRight, { x: 0, y: 0 });
	  tl2.to($circlesBottomRight, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) });
	  tl2.to($circlesBottomRight.eq(0), 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
	  tl2.to($circlesBottomRight.eq(1), 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
	  tl2.to($circlesBottomRight.eq(2), 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2');
	  tl2.to($circlesBottomRight.eq(0), 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
	  tl2.to($circlesBottomRight.eq(1), 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
	  tl2.to($circlesBottomRight.eq(2), 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');
	  
	  tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
	  tlBt2.add(tl2);

	  btTl.add(tlBt1);
	  btTl.to($(this).parent().find('.button.effect-button'), 0.8, { scaleY: 1.1 }, 0.1);
	  btTl.add(tlBt2, 0.2);
	  btTl.to($(this).parent().find('.button.effect-button'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);

	  btTl.timeScale(3);

	  $(this).on('mouseover', function() {
	    btTl.restart();
	  });
	});

	// Timeline effect
	$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

  	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}

  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  } else {
  	
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  }
  
  sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });
});

	// // header fixed effect on scroll
	let diff = $(window).height()- $('.ul-nav').height();
	let headerHeight = $('header').height();
	
	$(window).on('scroll', function(){

		if($(window).scrollTop() > headerHeight){
			$('.ul-nav').css({
				opacity:1,
				boxShadow:'0 15px 15px -15px rgba(0, 0, 0, 0.5)',
				background:'#FFF',
				position:'fixed',
				width:'100%'
			})

			$('.ul-nav a').addClass('link-color-switch')

		}else if($(window).scrollTop() > diff){
			// $('.nav').css({
			// 	position:'',
			// 	opacity:0,
			// })
		}else if($(window).scrollTop() < diff){
			$('.ul-nav').css({
				position:'static',
				opacity:1,
				display:'flex',
				boxShadow:'none',
				background:'none',
			})
			$('.ul-nav a').removeClass('link-color-switch')
		}

	})

	// swiper slider 
	// our base section
	var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });

	// directv section
	var mySwiper = new Swiper ('.swiper-container', {
	   speed: 1000,
	   autoplay: {
	      delay: 1000,
	   },
	   grabCursor: true
	 });
	// testimonial effects fix later.
	$('.content').on('click', function(){
		let currentInput = $(this).parent().parent().find('input[type="radio"]');
		currentInput.click()
		// fix cursor problem later.
		$(this).css('cursor','default')
	});

	//  Header shapes Animations refine later. 	
	let shape2 = anime({
	  targets: '.shape-2',
	  translateY:-200,
	  scale:[.4,.4],
	  duration:50000,
	  direction:'alternate',
	  easing: 'linear',
	  loop:true
	});
	

	let shape6 = anime({
	  targets: '.shapes .shape-6',
	  rotate: '360',
	  opacity: .5,
	  scale:.5,
	  duration:20000,
	  direction:'alternate',
	  easing: 'cubicBezier(.5, .05, .1, .3)',
	  loop:true
	});

	let shape4 = anime({
	  targets: '.shapes .shape-4',
	  translateY:[-100, 400],
	  duration:50000,
	  direction:'alternate',
	  easing: 'linear',
	  loop:true
	});
	
	let shape7 = anime({
	  targets: '.shapes .shape-7',
	  rotate: '-360',
	  duration:10000,
	  direction:'alternate',
	  easing: 'cubicBezier(.5, .05, .1, .3)',
	  loop:true
	});

	let shape8 = anime({
	  targets: '.f-shape-1 img',
	  rotate: '360',
	  duration:100000,
	  direction:'alternate',
	  easing: 'linear',
	  loop:true
	});
	
	let shape9 = anime({
	  targets: '.f-shape-2',
	  translateY:-50,
	  duration:6000,
	  direction:'alternate',
	  easing: 'linear',
	  loop:true
	});

	// Menu Button Trigger.
	const btn = document.getElementById("menu-toggle");
	const lines = btn.querySelectorAll(".line");
	const cls = { open: "open", close: "close" };
	let btnClass = cls.open;

	// This is when the window is being resized 
	// the user doesn't usually perform this action
	// but it's nice to have if a developer try to inspect the website.
	$(window).on('resize', function(){
		if(window.matchMedia('(min-width: 950px)').matches){
			console.log('arrived')
			$('nav').fadeIn();	
		}
	})

	// Trigger the fullscreen navigation. 
	btn.addEventListener("click", () => {
		$('nav').fadeToggle();
		$('.navigation-menu').css({
			zIndex:999999
		});

	  if (btn.classList.contains(cls.open)) {
	    btn.classList.remove(btnClass);
	    btnClass = cls.close;
	  } else if (btn.classList.contains(cls.close)) {
	    btn.classList.remove(btnClass);
	    btnClass = cls.open;
	  }

	  void btn.offsetWidth;
	  btn.classList.add(btnClass);
	});

	// tilt effect:
	 $('.info-1 li').tilt();
	 $('.bundles .card').tilt({
	    maxTilt:3	 	
	 });

	//accordion 
	$('li.accordion-item').on('click', function(){
		$(this).find('.accordion-child')
			   .addClass('check')
			   .parent()
			   .siblings()
			   .find('.accordion-child')
			   .removeClass('check')
	}) 
	// bundles shape animation

});

// fix this later


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
