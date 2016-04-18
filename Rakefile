# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks



desc "seeds the database with information from the city of Toronto"
task :seeds => :environment do
  require './db/seeds.rb'
end


# rake file to seed from the csv file
desc "seed database with information from csv file"
task :csvseed => :environment do
	require 'csv'    
	csv_text = File.read('./db/parkNameAddress.csv')
	csv = CSV.parse(csv_text, :headers => true)
	csv.each do |row|
	  Locations.create!(row.to_hash)
	end
end
