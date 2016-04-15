class Park < ActiveRecord::Base

	has_many :users
	has_many :facilities

end
