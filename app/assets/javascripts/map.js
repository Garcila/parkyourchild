	'use strict';

	var parkMap = (function () {
		// var map;
		var markers = [];
		var infowindow = null;
		var mapStyles = [
	          {"stylers": [
	          { "weight": 2.6 },
	          { "visibility": "on" },
	          { "saturation": -9 },
	          { "hue": "#0008ff" }
	        ]
	      },{
	        "featureType": "poi.park",
	        "elementType": "geometry",
	        "stylers": [
	          { "saturation": 26 },
	          { "hue": "#00ff09" },
	          { "lightness": -19 },
	          { "gamma": 0.98 }
	        ]
	      },{
	        "featureType": "road.highway",
	        "stylers": [
	          { "hue": "#0077ff" }
	        ]
	      },{
	        "featureType": "transit.station",
	        "stylers": [
	          { "hue": "#ff1a00" },
	          { "visibility": "simplified" }
	        ]
	      },{
	        "featureType": "poi.sports_complex",
	        "stylers": [
	          { "gamma": 0.83 },
	          { "saturation": 45 },
	          { "lightness": -41 },
	          { "hue": "#00ff2b" }
	        ]
	      },{
	        "featureType": "road.arterial",
	        "stylers": [
	          { "visibility": "simplified" },
	          { "saturation": 48 },
	          { "weight": 1.9 },
	          { "hue": "#007fff" },
	          { "lightness": -26 }
	        ]
	      },{
	        "featureType": "transit.line"  }
	    ];

		var image = 'http://i.imgur.com/L4x1Fie.png';

		function createMarkers(data, map) {
			data.forEach(function(dataPoint) {
	  		if(dataPoint.lat !== null) {
	  			markers.push(new google.maps.Marker(
		  			{
		  				map: map,
		  				icon: image,
		  				title: dataPoint.name,
		  				// draggable: true,
		  				// animation: google.maps.Animation.DROP,
		  				// title: dataPoint.phonenumber,
		  				position: {
		  					lat: parseFloat(dataPoint.lat),
		  					lng: parseFloat(dataPoint.lng)
		  				}
		  			}
	  			));
	  		}
      });
		}

		return {
			initialize: function(domID, data) {
				infowindow = new google.maps.InfoWindow({
				content: "holding..."
				});
				
				var map = new google.maps.Map(document.getElementById(domID),{
					center: {lat: 6.253076, lng: -75.568423},
					zoom: 15,
					mapTypeControlOptions: {
						mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'parkmappark']
					}
				});

			  var imageCurrentLocation = 'http://i.imgur.com/KHru31F.png'

		    var directionsDisplay = new google.maps.DirectionsRenderer({
  				map: map
			  });
			  
			  var myPosition = new google.maps.Marker({
			    map: map,
			    icon: imageCurrentLocation,
			    title: "this is you"
			  });
				
				var x = new google.maps.StyledMapType(mapStyles, {name: 'PYC'});
				map.mapTypes.set('parkmappark', x);
				map.setMapTypeId('parkmappark');
				
				createMarkers(data, map);
				// debugger;

				for (var i = 0; i < markers.length; i++) {
				var marker = markers[i];
				google.maps.event.addListener(marker, 'click', function () {
						// where I have added .html to the marker object.
						infowindow.setContent(this.title);
						infowindow.open(map, this);
					});
				};

			  // Try HTML5 geolocation.
			  if (navigator.geolocation) {
			  	navigator.geolocation.getCurrentPosition(function(position) {
			  		var pos = {  
			  			lat: position.coords.latitude,
			  			lng: position.coords.longitude
			  		};

			  		var indianapolis = {lat: 43.646424, lng: -79.398986};

			  		// Set destination, origin and travel mode.
					  var request = {
					    destination: indianapolis,
					    origin: pos,
					    travelMode: google.maps.TravelMode.DRIVING
					  };

					  // Pass the directions request to the directions service.
					  var directionsService = new google.maps.DirectionsService();
					  directionsService.route(request, function(response, status) {
					    if (status == google.maps.DirectionsStatus.OK) {
					      // Display the route on the map.
					      directionsDisplay.setDirections(response);
					    }
					  });

			  		myPosition.setPosition(pos);
			  		map.setCenter(pos);
			  	}, function() {
			  		handleLocationError(true, infowindow, map.getCenter());
			  	});
			  } else {
			    // Browser doesn't support Geolocation
			    handleLocationError(false, infowindow, map.getCenter());
			  }
				function handleLocationError(browserHasGeolocation, infowindow, pos) {
					infowindow.setPosition(pos);
					infowindow.setContent(browserHasGeolocation ?
						'Error: The Geolocation service failed.' :
						'Error: Your browser doesn\'t support geolocation.');
				}
				$("input[type='checkbox']").on("click", function(event) {
			 		console.log(this);
			 		console.log(event.target);
			 		$.ajax( {
			 			url: '/search',
			 			method: 'POST',
			 			data: { track: this.checked ? this.value : "" },
			 			success: function(json) {
			 				markers.forEach (function(marker) {
			 					marker.setMap(null);
			 				});
			 				createMarkers(json, map)
			 			}
			 		})
		  	});
		  	$("input[type='search_displayname']").on("click", function(event) {
			 		console.log(this);
			 		console.log(event.target);
			 		$.ajax( {
			 			url: '/search',
			 			method: 'POST',
			 			data: { track: this.checked ? this.value : "" },
			 			success: function(json) {
			 				markers.forEach (function(marker) {
			 					marker.setMap(null);
			 				});
			 				createMarkers(json, map)
			 			}
			 		})
		  	});
		  }
		}
	})();


	