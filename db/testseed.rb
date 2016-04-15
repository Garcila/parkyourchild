
require 'nokogiri'
require 'open-uri'

doc = Nokogiri::XML(File.open("parks.xml")) do |config|
	config.noblanks
end

doc.css('Location').each do |park|
	@park = Park.create(:name => park.css('LocationName').inner_text, :address => park.css('Address').inner_text, :postalcode => park.css('PostalCode').inner_text)
 	park.children.each do |facility|
		Facility.create(:name => facility.css('FacilityName').inner_text, :displayname => facility.css('FacilityDisplayName').inner_text, :park_id => @park.id)
	end
end