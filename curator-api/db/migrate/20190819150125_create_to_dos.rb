class CreateToDos < ActiveRecord::Migration[5.2]
  def change
    create_table :to_dos do |t|
      t.references :user, foreign_key: true
      t.string :item
      t.string :comment
      t.string :due_date

      t.timestamps
    end
  end
end
