class ParksController < ApplicationController
  before_action :set_park, only: [:show, :edit, :update, :destroy]

  # GET /parks
  # GET /parks.json
  def index
    @parks = Park.all

    # if params[:search_displayname] != ""
    #   @parks = @parks.search(params[:search_displayname])
    # end 

    # if params[:track]
    #   puts "hello"
    #   @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Track%")
    # end 

    if params[:track] != "" 
      case params[:track]
        when "Track" 
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Track%")
        when "Washroom"
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Washroom%")
        when "Rink"
          @parks =parks.joins(:facilities).where("facilities.displayname like ?", "%Rink%")
        when "Sports Area"
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Sport Field%")
        when "Pool"
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Pool%")
        when "Playground"
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Playground%")
        when "Dog Playpark"
          @parks = @parks.joins(:facilities).where("facilities.displayname like ?", "%Dogs Off-Leash Area%")
        else 
          puts "Where did it go?"
      end
    end 
  end

  # GET /parks/1
  # GET /parks/1.json
  def show
  end

  # GET /parks/new
  def new
    @park = Park.new
  end

  # GET /parks/1/edit
  def edit
  end

  # POST /parks
  # POST /parks.json
  def create
    @park = Park.new(park_params)

    respond_to do |format|
      if @park.save
        format.html { redirect_to @park, notice: 'Park was successfully created.' }
        format.json { render :show, status: :created, location: @park }
      else
        format.html { render :new }
        format.json { render json: @park.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /parks/1
  # PATCH/PUT /parks/1.json
  def update
    respond_to do |format|
      if @park.update(park_params)
        format.html { redirect_to @park, notice: 'Park was successfully updated.' }
        format.json { render :show, status: :ok, location: @park }
      else
        format.html { render :edit }
        format.json { render json: @park.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /parks/1
  # DELETE /parks/1.json
  def destroy
    @park.destroy
    respond_to do |format|
      format.html { redirect_to parks_url, notice: 'Park was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_park
      @park = Park.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def park_params
      params.require(:park).permit(:name, :address, :postalcode, :imgageurl, :cleanliness, :welllit)
    end

end
