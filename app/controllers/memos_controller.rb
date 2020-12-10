class MemosController < ApplicationController


	def index
		@memo = Memo.new
		@memos = Memo.all
	end

	def create
		@memo = Memo.new(memo_params)
		if @memo.save
			respond_to do |format|
				format.html{redirect_to root_path}
				format.json
			end
		else
			flash.now[:alert] = "送信に失敗しました。"
			render action: :index
		end
	end

	def destroy
		@memo = Memo.find(params[:id])
		@memo.delete
		redirect_to memos_path
	end

	def edit
	end

	private
	def memo_params
		params.require(:memo).permit(:memo)
	end
end
