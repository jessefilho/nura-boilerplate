class CreateGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.string :location
      t.string :description
      t.string :home
      t.string :menu

      t.timestamps
      t.belongs_to :role, foreign_keys:true
    end
  end
end
