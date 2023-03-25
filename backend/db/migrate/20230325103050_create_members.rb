class CreateMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :members do |t|
      t.belongs_to :user, index: true, foreign_key: true # it may replace user_id
      t.belongs_to :group, index: true, foreign_key: true # it may replace group_id
      t.boolean :group_owner
      t.boolean :main, :default => false #user has as main the a group
      t.timestamps
    end
  end
end
