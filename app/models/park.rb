class Park < ActiveRecord::Base

	acts_as_mappable
	before_validation :geocode_address, :only => [:create, :update]

	has_many :users
	has_many :facilities

	private

  def geocode_address
    return if address.blank?
    geo=Geokit::Geocoders::MultiGeocoder.geocode ("#{self.address}, Toronto, Canada")
    errors.add(:address, "Could not Geocode address") if !geo.success
    self.lat, self.lng = geo.lat, geo.lng if geo.success
  end

end
