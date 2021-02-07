class CreateScrolls < ActiveRecord::Migration[5.2]
  def change
    create_table :scrolls do |t|

      t.timestamps
    end
  end
end
