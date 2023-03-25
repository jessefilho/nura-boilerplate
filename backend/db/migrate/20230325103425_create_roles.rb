class CreateRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :roles do |t|
      t.string :name
      t.boolean :guest, :default=> true
      t.boolean :super_admin, :default=> false
      t.boolean :admin, :default=> false
      t.boolean :basics, :default=> false

      t.timestamps
    end
  end
end
