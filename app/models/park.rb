class Park < ActiveRecord::Base

	acts_as_mappable :auto_goecode => true

	has_many :users
	has_many :facilities

end
