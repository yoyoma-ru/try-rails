$(function(){
	function createHTML(note){
		let html = `<div class="note" id="note${note.id}">
						<span class="note_name">投稿者：ユーザー機能未実装</span>
						<a class="note_delete" rel="nofollow" data-method="delete" href="/notes/${note.id}>削除</a>"
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
		.done(function(){
			let html = createTHML(data);
			$(".notes").append(html);
			$(".note_form-text").val("");
		})
		.fail(function(jqXHR, textStatus, errorThrown){
			alert("error!");
			console.log("ajax通信に失敗しました");
            console.log("jqXHR          : " + jqXHR.status); // HTTPステータスが取得
            console.log("textStatus     : " + textStatus);    // タイムアウト、パースエラー
            console.log("errorThrown    : " + errorThrown.message); //
            console.log("URL            : " + url);
		})
		.always(function(){
			$(".note_form-btn").prop("disabled", false);
			$(".note_form-btn").removeAttr("data-disable-with");
		});
	});
});