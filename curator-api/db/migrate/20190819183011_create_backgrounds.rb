class CreateBackgrounds < ActiveRecord::Migration[5.2]
  def change
    create_table :backgrounds do |t|
      t.string :url
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
