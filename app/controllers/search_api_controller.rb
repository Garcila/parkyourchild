class SearchApiController < ApplicationController

	def search
		@parks = Park.all
		if params[:track] != "" 
      case params[:track]
        when "Track" 
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Track%")
        when "Washroom"
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Washroom%")
        when "Rink"
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Rink%")
        when "Sports Area"
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Sport Field%")
        when "Pool"
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Pool%")
        when "Playground"
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Playground%")
        when "Dog Playpark"
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Dogs Off-Leash Area%")
        else
          puts "monkey's brain"
      end
    end
		render json: @parks
	end

end