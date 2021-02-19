window.onscroll = scrollWindow;
function scrollWindow(){
	var items = document.querySelectorAll(".stop");
	items.forEach(function(item){
		var backgroundColor = item.style.backgroundColor;
		if(isItemInScreen(item) && !(backgroundColor == 'rgb(37, 37, 37)')){
			item.style.backgroundColor = 'rgb(37, 37, 37)';
			// stopScroll();
			no_scroll();
			setTimeout(return_scroll, 3000);
		}
	});
}
function isItemInScreen(item){
	// 画面の高さ
	var screenHeight = window.innerHeight;
	// itemボトムの座標
	itemBottomY = item.getBoundingClientRect().bottom;
	// 上からスクロールしてきて止まる位置
	var boundary = screenHeight/2;
	if(0<=itemBottomY && itemBottomY<=boundary){
		return true;
	}
	return false;
}
function isItemInScreen2(item){
	var screenHeight = window.innerHeight;
	itemBottomY = item.getBoundingClientRect().bottom;
	var boundary = screenHeight*0.9;
	if(0<=itemBottomY && itemBottomY<=boundary){
		return true;
	}
	return false;
}
function isItemInScreen3(item){
	var screenHeight = window.innerHeight;
	itemTopY = item.getBoundingClientRect().top;
	var boundary = screenHeight/2;
	if(0>=itemTopY){
		return true;
	}
	return false;
	console.log("失敗");
}
// function stopScroll(){
// 	// 現在のスクロール量
// 	var scrollOffsetY = window.pageYOffset;
// 	window.scrollTo(0, scrollOffsetY);
// }



// スクロール禁止
function no_scroll() {
    // PCでのスクロール禁止
    document.addEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止
    document.addEventListener("touchmove", scroll_control, { passive: false });
}
// スクロール禁止解除
function return_scroll() {
    // PCでのスクロール禁止解除
    document.removeEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止解除
    document.removeEventListener('touchmove', scroll_control, { passive: false });
}
// スクロール関連メソッド
function scroll_control(event) {
    event.preventDefault();
}




// //スクロール禁止用関数
// function no_scroll(){
// 	//PC用
// 	var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
// 	$(document).on(scroll_event,function(e){
// 		e.preventDefault();
// 	});
// 	//SP用
// 	$(document).on('touchmove.noScroll', function(e){
// 		e.preventDefault();
// 	});
// }

// //スクロール復活用関数
// function return_scroll(){
// 	//PC用
// 	var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
// 	$(document).off(scroll_event);
// 	//SP用
// 	$(document).off('.noScroll');
// }

