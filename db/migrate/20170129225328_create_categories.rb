class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :subtitle
      t.string :description
      t.string :iconSrc

      t.timestamps
    end
  end
end
