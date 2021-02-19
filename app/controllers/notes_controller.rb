class NotesController < ApplicationController

	def index
		@note = Note.new
		@notes = Note.all
	end

	def create
		@note = Note.new(note_params)
		if @note.save
			respond_to do |format|
				format.html { redirect_to notes_path }
				format.json { render json: {body: @note.body, id: @note.id}}
			end
		end
	end

	def destroy
		@note = Note.find(params[:id])
		if @note.destroy
			respond_to do |format|
				format.html { redirect_to notes_path }
				format.json { render json: { id: params[:id]} }
			end
		end
	end

	private
	def note_params
		params.require(:note).permit(:body)
	end
end
