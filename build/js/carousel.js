 $(document).ready(function(){
 	AOS.init();
		$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
        items: 1,
        slideBy: 2,
        nav: true,
        navText: ["Предыдущий","Следующий"]
	});		
});