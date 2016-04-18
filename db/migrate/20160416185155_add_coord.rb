class AddCoord < ActiveRecord::Migration
  def change
  	add_column :parks, :lat, :decimal, {:precision=>10, :scale=>6}
		add_column :parks, :lng, :decimal, {:precision=>10, :scale=>6}
  end
end
