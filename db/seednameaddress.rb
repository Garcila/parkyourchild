# desc "seed database with information from csv file"
# task :csvseed => :environment do
	require 'csv'    
	csv_text = File.read('./parkNameAddress.csv')
	csv = CSV.parse(csv_text, :headers => true)
	csv.each do |row|
		location = row.to_hash
		puts location
		# Location.create(:locationame => park[:locationname], :locationaddress => park[:locationaddress])
	end