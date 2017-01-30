class CreateLessons < ActiveRecord::Migration[5.0]
  def change
    create_table :lessons do |t|
      t.string :name
      t.string :description_one
      t.string :description_two
      t.string :description_three
      t.string :description_four
      t.string :image_src
      t.integer :category_id

      t.timestamps
    end
  end
end
