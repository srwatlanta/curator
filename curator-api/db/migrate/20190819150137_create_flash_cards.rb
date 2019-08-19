class CreateFlashCards < ActiveRecord::Migration[5.2]
  def change
    create_table :flash_cards do |t|
      t.references :user, foreign_key: true
      t.string :clue
      t.string :answer

      t.timestamps
    end
  end
end
