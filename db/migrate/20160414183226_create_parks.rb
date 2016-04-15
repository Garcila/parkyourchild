class CreateParks < ActiveRecord::Migration
  def change
    create_table :parks do |t|
      t.string :name, default: ""
      t.string :address, default: ""
      t.string :postalcode, default: ""
      t.string :imgageurl, default: ""
      t.boolean :cleanliness
      t.boolean :welllit
      t.boolean :parking
      t.integer :toparkid, default: ""
      t.integer :phonenumber, default: ""

      t.timestamps null: false
    end
  end
end