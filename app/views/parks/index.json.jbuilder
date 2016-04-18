json.array!(@parks) do |park|
  json.extract! park, :id, :name, :address, :postalcode, :imgageurl, :cleanliness, :welllit, :lat, :lng
  json.url park_url(park, format: :json)
end
