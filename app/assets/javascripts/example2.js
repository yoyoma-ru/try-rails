onload = function(){
	const images = document.querySelectorAll(".top-box");
	console.log(images);

	const options = {
		root: null,
		rootMargin: "-50% 0px",
		threshold: 0
	};
	console.log(options);
	const observer = new IntersectionObserver(
		doWhenIntersect, options);
	console.log(observer);
	images.forEach(image =>{
		observer.observe(image);
	});
}
function doWhenIntersect(entries){
	console.log(entries);
	entries.forEach(entry =>{
		if(entry.isIntersecting){
			console.log(entry.target);
			activateIndex(entry.target);
		}
	});
}
function activateIndex(element){
	console.log(element);
	const currentActiveIndex = document.querySelector(
		"#imageList .active");
	console.log(currentActiveIndex);
	if (currentActiveIndex !== null){
		currentActiveIndex.classList.remove("active");
		console.log("remove");
	}
	const newActiveList = document.querySelector(
		`div[class='${element.id}']`
	);
	console.log(newActiveList)
	newActiveList.classList.add("active");
}
