class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :description
      t.boolean :multiple_choice
      t.string :option_one
      t.string :option_two
      t.string :option_three
      t.string :answer
      t.integer :category_id
      t.string :image_src
      t.string :correction

      t.timestamps
    end
  end
end
