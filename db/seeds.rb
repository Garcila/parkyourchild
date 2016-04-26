
require 'nokogiri'
require 'open-uri'

# doc = Nokogiri::XML(open("http://www1.toronto.ca/City_Of_Toronto/Information_Technology/Open_Data/Data_Sets/Assets/Files/locations-20110725.xml"))


# doc = Nokogiri::XML(File.open("db/parks.xml"))

# doc.css('Location').each do |park|
# 	@park = Park.create(:name => park.css('LocationName').inner_text, :address => park.css('Address').inner_text, :postalcode => park.css('PostalCode').inner_text, :toparkid => park.css('LocationID').inner_text, :phonenumber => park.css('PhoneNumber').inner_text)
#  	park.css('Facility').each do |facility|
# 		Facility.create(:name => facility.css('FacilityName').inner_text, :displayname => facility.css('FacilityDisplayName').inner_text, :tofacilityid => facility.css('FacilityID').inner_text, :park_id => @park.id)
# 	end
# end


