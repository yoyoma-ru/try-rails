class Memo < ApplicationRecord
	validates :memos, presence: true
end
