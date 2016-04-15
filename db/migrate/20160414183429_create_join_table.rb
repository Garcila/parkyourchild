class CreateJoinTable < ActiveRecord::Migration
  def change
    create_join_table :parks, :users do |t|
      t.index [:park_id, :user_id]
      t.index [:user_id, :park_id]
      t.integer :rating
    end
  end
end