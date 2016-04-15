# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks



desc "seeds the database with information from the city of Toronto"
task :seeds => :environment do
  require './db/seeds.rb'
end
