class HomeController < ApplicationController

	def index
		@parks = Park.all
	end
	
end
