onload = function(){
	const images2 = document.querySelectorAll(".top-box2");
	console.log(images2);

	const options2 = {
		root: null,
		rootMargin: "-50% 0px",
		threshold: 0
	};
	console.log(options2);
	const observer2 = new IntersectionObserver(
		doWhenIntersect2, options2);
	console.log(observer2);
	images2.forEach(image =>{
		observer2.observe(image);
	});
}
function doWhenIntersect2(entries){
	console.log(entries);
	entries.forEach(entry =>{
		if(entry.isIntersecting){
			console.log(entry.target);
			activateIndex2(entry.target);
		}
	});
}
function activateIndex2(element){
	console.log(element);
	const currentActiveIndex2 = document.querySelector(
		"#imageList2 .active");
	console.log(currentActiveIndex2);
	if (currentActiveIndex2 !== null){
		currentActiveIndex2.classList.remove("active");
		console.log("remove");
	}
	const newActiveList2 = document.querySelector(
		`div[class='${element.id}']`
	);
	console.log(newActiveList2)
	newActiveList2.classList.add("active");
}

// アニメーション
$(function(){
	ScrollReveal().reveal('.image6',{
		duration: 2000,
		delay: 2000,
		viewFactor: 0.2,
		reset: true
	});
});
$(function(){
	ScrollReveal().reveal('.image7',{
		duration: 2000,
		viewFactor: 0.2,
		reset: true
	});
});