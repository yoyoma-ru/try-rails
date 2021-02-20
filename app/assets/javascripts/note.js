// index.html.erb
$(function(){
	function createHTML(note){
		let html = `<div class="note" id="note${note.id}">
						<span class="note_name">投稿者：ユーザー機能未実装</span>
						<p id="js-note-label-${note.id}" class="note_body">${note.body}</p>
						<div class="">
							<span data-note-id=${note.id} class="js-edit-note-button">
								<i class="fas fa-edit text-primary">編集</i>
							</span>
							<p id="js-note-post-error-${note.id}%>" class="text-danger"></p>
							<textarea style="display: none" id="js-textarea-note-${note.id}" class="form-control note-post-error">${note.body}</textarea>
							<div id="js-note-button-${note.id}" style="display: none;">
								<button data-cancel-id=${note.id} type="button" class="btn btn-light note-cancel-button">キャンセル</button>
								<button data-update-id=${note.id} type="submit" class="btn btn-success note-update-button">更新</button>
							</div>
							<a class="note_delete" rel="nofollow" data-method="delete" href="/notes/${note.id}">
								<i class="fas fa-trash-alt" style="color: black;">削除</i>
							</a>
						</div>
						<br>
					</div>`
		return html;
	}

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

	// update処理を非同期通信で実行
	$("notes").on("click", "js-edit-note-button", function(){
		// data属性を使ってHTMLで"data-"で記述したものをとってくる
		const noteId = $(this).data("note-id");
		const noteLabelArea = $("#js-note-label-"+noteId);
		const noteTextArea = $("#js-textarea-note-"+noteId);
		const noteButton = $("#js-note-button-"+noteId);

		console.log(noteId);
		console.log(noteLabelArea);
		console.log(noteTextArea);
		console.log(noteButton);

		noteLabelArea.hide();
		noteTextArea.show();
		noteButton.show();
		console.log("editエリアの作成まで完了");
	});
	// note編集エリアを「キャンセル」を押して非同期通信で非表示
	$(document).on("click", ".note-cancel-button", function(){
		const noteId = $(this).data("cancel-id");
		const noteLabelArea = $("#js-note-label-"+noteId);
		const noteTextArea = $("#js-textarea-note-"+noteId);
		const noteButton = $("#js-note-button-"+noteId);
		const noteError = $("#js-note-post-"+noteId);

		noteLabelArea.show();
		noteTextArea.hide();
		noteButton.hide();
		noteError.hide();
		console.log("編集エリアの非表示に成功");
	});
	// noteを非同期通信で更新
	$(document).on("click", ".note-update-button", function(){
		const noteId = $(this).data("update-id");
		const noteField = $("#js-textarea-note-"+noteId);
		const body = noteField.val();
		console.log(body);

		$.ajax({
			url: "/notes/"+noteId,
			type: "POST",
			data: {
				_method: "PATCH",
				note: {body: body}
			},
			dataType: "json"
		})
		.done(function(data){
			const noteLabelArea = $("#js-note-label-"+noteId);
			const noteTextArea = $("#js-textarea-note-"+noteId);
			const noteButton = $("#js-note-button-"+noteId);
			const noteError = $("#js-note-post-error-"+noteId);

			noteLabelArea.show();
			noteLabelArea.text(data.body);
			noteTextArea.hide();
			noteButton.hide();
			noteError.hide();
			console.log("更新完了");
		})
		.fail(function(){
			const noteError = $("#js-note-post-error-"+noteId);
			noteError.text("コメントを入力して下さい");
		});
	});

	// delete処理の非同期通信実行
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



// edit_example.html.erb

// note編集エリアを非同期通信で作成
$(function(){
	$(document).on("click", ".js-edit-note-button", function(){
		// data属性を使ってHTMLで"data-"で記述したものをとってくる
		const noteId = $(this).data("note-id");
		const noteLabelArea = $("#js-note-label-"+noteId);
		const noteTextArea = $("#js-textarea-note-"+noteId);
		const noteButton = $("#js-note-button-"+noteId);

		console.log(noteId);
		console.log(noteLabelArea);
		console.log(noteTextArea);
		console.log(noteButton);

		noteLabelArea.hide();
		noteTextArea.show();
		noteButton.show();
		console.log("ここまで完了");
	});
});
// note編集エリアを非同期通信で非表示
$(function(){
	$(document).on("click", ".note-cancel-button", function(){
		const noteId = $(this).data("cancel-id");
		const noteLabelArea = $("#js-note-label-"+noteId);
		const noteTextArea = $("#js-textarea-note-"+noteId);
		const noteButton = $("#js-note-button-"+noteId);
		const noteError = $("#js-note-post-"+noteId);

		noteLabelArea.show();
		noteTextArea.hide();
		noteButton.hide();
		noteError.hide();
	});
});
// noteを非同期通信で更新
$(function(){
	$(document).on("click", ".note-update-button", function(){
		const noteId = $(this).data("update-id");
		const noteField = $("#js-textarea-note-"+noteId);
		const body = noteField.val();
		console.log(body);

		$.ajax({
			url: "/notes/"+noteId,
			type: "POST",
			data: {
				_method: "PATCH",
				note: {body: body}
			},
			dataType: "json"
		})
		.done(function(data){
			const noteLabelArea = $("#js-note-label-"+noteId);
			const noteTextArea = $("#js-textarea-note-"+noteId);
			const noteButton = $("#js-note-button-"+noteId);
			const noteError = $("#js-note-post-error-"+noteId);

			noteLabelArea.show();
			noteLabelArea.text(data.body);
			noteTextArea.hide();
			noteButton.hide();
			noteError.hide();
			console.log("更新完了");
		})
		.fail(function(){
			const noteError = $("#js-note-post-error-"+noteId);
			noteError.text("コメントを入力して下さい");
		});
	});
});