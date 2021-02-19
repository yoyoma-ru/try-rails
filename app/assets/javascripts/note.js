$(function(){
	function createHTML(note){
		let html = `<div class="note" id="note${note.id}">
						<span class="note_name">投稿者：ユーザー機能未実装</span>
						<a class="note_delete" rel="nofollow" data-method="delete" href="/notes/${note.id}">削除</a>
						<p class="note_body">${note.body}</p>
					</div>`
		return html;
	};

	$("#note_input").on("submit", function(e){
		e.preventDefault();
		console.log("start");
		let inputText = $(".note_form-text").val();
		let url = $(this).attr("action");
		$.ajax({
			url: url,
			type: "POST",
			data: {
				note: {body: inputText}
			},
			dataType: "json"
		})
		.done(function(data){
			let html = createHTML(data);
			$(".notes").append(html);
			$(".note_form-text").val("");
			console.log("finish");
		})
		.fail(function(){
			alert("error!");
		})
		.always(function(){
			$(".note_form-btn").prop("disabled", false);
			$(".note_form-btn").removeAttr("data-disable-with");
		});
	});

	// delete処理の非同期通信
	$(".notes").on("click", ".note_delete", function(e){
		e.preventDefault(); //イベント遷移を無効
		e.stopPropagation(); //delete処理の実行を止める
		let url = $(this).attr("href");
		$.ajax({
			url: url,
			type: "POST",
			data: {
				_method: "delete",
			},
			dataType: "json"
		})
		.done(function(data){
			$("#note" + data.id).remove();
		})
		.fail(function(XMLHttpRequest){
			alert(XMLHttpRequest.status);
		});
	});
});
