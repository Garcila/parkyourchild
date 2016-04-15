class CreateFacilities < ActiveRecord::Migration
  def change
    create_table :facilities do |t|
      t.string :name, default: ""
      t.string :displayname, default: ""
      t.integer :tofacilityid, default: ""
      t.references :park, index: true

      t.timestamps null: false
    end
  end
end