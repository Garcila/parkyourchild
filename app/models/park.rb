class Park < ActiveRecord::Base

	acts_as_mappable
	before_validation :geocode_address, :only => [:create, :update]
  # geocode_ip_address 

	has_many :users
	has_many :facilities

  def self.search(search)

    joins(:facilities).where("facilities.displayname ILIKE ? ", search)
    # joins(:facilities).where("facilities.name LIKE ? ", search)
  end 

	private

  def geocode_address
    return if address.blank?
    geo=Geokit::Geocoders::MultiGeocoder.geocode ("#{self.address}, Toronto, Canada")
    errors.add(:address, "Could not Geocode address") if !geo.success
    self.lat, self.lng = geo.lat, geo.lng if geo.success
  end
end
