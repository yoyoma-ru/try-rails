onload = function(){
	const images = document.querySelectorAll(".top-box3");
	console.log(images);

	const options = {
		root: null,
		rootMargin: "0px 0px -90% 0px",
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
	const currentLeaveIndex = document.querySelector(
		"#imageList3 .is-leave");
	if(currentLeaveIndex !== null){
		currentLeaveIndex.classList.remove("is-leave");
		console.log("leave");
	}

	const currentActiveIndex = document.querySelector(
		"#imageList3 .is-active");
	console.log(currentActiveIndex);
	if(currentActiveIndex !== null){
		currentActiveIndex.classList.remove("is-active");
		currentActiveIndex.classList.add("is-leave");
		console.log("add remove");
	}

	const currentActiveText = document.querySelector(
		".text-box .is-active2");
	console.log(currentActiveIndex);
	if(currentActiveText !== null){
		currentActiveText.classList.remove("is-active2");
		console.log("text remove");
	}

	const newActiveList = document.querySelector(
		`div[class="image-style ${element.id}"]`
	);
	console.log(newActiveList)
	newActiveList.classList.add("is-active");

	const newActiveText = document.querySelector(
		`div[class="text-box ${element.id}"]`
	);
	console.log(newActiveText)
	newActiveText.classList.add("is-active2");
	newActiveText.classList.remove(element.id);
}

