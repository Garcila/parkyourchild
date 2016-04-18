class Park < ActiveRecord::Base

	acts_as_mappable

	has_many :users
	has_many :facilities

end
