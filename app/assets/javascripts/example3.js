$(function(){
	ScrollReveal().reveal('.box',{
		duration: 2000,
		viewFactor: 0.2,
		opacity: 0.1
	});
});

$(function(){
	ScrollReveal().reveal('.text1',{
		duration: 3000,
		origin: 'right',
		distance: '80px',
		scale: 0.2
	});
});

$(function(){
	ScrollReveal().reveal('.text2',{
		duration: 2000,
		delay: 3000,
		origin: 'bottom',
		distance: '80px',
		scale: 0.2,
		reset: true
	});
});

$(function(){
	ScrollReveal().reveal('.image6',{
		duration: 6000,
		delay: 500,
		viewFactor: 0.1,
		opacity: 0,
		reset: true
	})
})