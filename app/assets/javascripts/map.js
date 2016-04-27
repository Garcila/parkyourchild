'use strict';

var parkMap = (function () {
	var map;
	var markers = [];
	var infowindow = null;
	var directionsDisplay;
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

	var icons = {
		"Default": "http://i.imgur.com/1Jr6zQI.png",
		"Washroom": "http://i.imgur.com/KWPLiJG.png",
		"Pool": "http://i.imgur.com/bW10exL.png",
		"Sports Area": "http://i.imgur.com/YL08vL8.png",
		"Track": "http://i.imgur.com/15F8Mxu.png",
		"Playground": "http://i.imgur.com/56u3hER.png",
		"Dog Playpark": "http://i.imgur.com/X0QDk5U.png",
		"Rink": "http://i.imgur.com/MLMeSUh.png"
	}

	function createMarkers(data, map, category) {
		data.forEach(function(dataPoint) {
  		if(dataPoint.lat !== null) {
  			var currentMarker = new google.maps.Marker(
		  			{
		  				map: map,
		  				icon: icons[category],
		  				title: dataPoint.name,

		  				// draggable: true,
		  				// animation: google.maps.Animation.DROP,
		  				// title: dataPoint.phonenumber,
		  				position: {
		  					lat: parseFloat(dataPoint.lat),
		  					lng: parseFloat(dataPoint.lng)
		  				}
		  			}
	  			);
			  		markers.push(currentMarker);
			  		currentMarker.addListener('click', function() {
			  			var destination = {  
				  			lat: this.position.lat(),
				  			lng: this.position.lng()
				  		};

					if (navigator.geolocation) {
				  	navigator.geolocation.getCurrentPosition(function(position) {
							var pos = {  
								lat: position.coords.latitude,
								lng: position.coords.longitude
							};
							getDirections(pos, destination)
						});
					}	
			  });
  		}
    });
	}


	function getDirections(pos, destination) {
	// Set destination, origin and travel mode.
	  var request = {
	    destination: destination,
	    origin: pos,
	    travelMode: google.maps.TravelMode.WALKING
	  };

	  // Pass the directions request to the directions service.
	  var directionsService = new google.maps.DirectionsService();

	  directionsService.route(request, function(response, status) {
	    if (status == google.maps.DirectionsStatus.OK) {
	      // Display the route on the map.
	      // directionsDisplay.setMap(null);
	      directionsDisplay.setDirections(response);
	    }
	  });
	};

	var imageCurrentLocation = 'http://i.imgur.com/WcQrFNS.png'

	return {
		initialize: function(domID, data) {
			infowindow = new google.maps.InfoWindow({
			content: "holding..."
			});
			
			map = new google.maps.Map(document.getElementById(domID),{
				center: {lat: 6.253076, lng: -79.395042},
				zoom: 15,
				mapTypeControlOptions: {
					mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'parkmappark']
				}
			});
    directionsDisplay = new google.maps.DirectionsRenderer({
				map: map
		  });

		  var myPosition = new google.maps.Marker({
		    map: map,
		    icon: imageCurrentLocation,
		    title: "You are here"
		  });
			
			var x = new google.maps.StyledMapType(mapStyles, {name: 'PYC'});
			map.mapTypes.set('parkmappark', x);
			map.setMapTypeId('parkmappark');
			
			createMarkers(data, map, "Default");

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
		 		var check = $(this);
		 		var search_string = check.is(':checked') ? check.val() : "Default";
		 		console.log(this);
		 		$.ajax( {
		 			url: '/search',
		 			method: 'POST',
		 			data: { 
		 				track: search_string
		 			},
		 			success: function(json) {
		 				markers.forEach (function(marker) {
		 					marker.setMap(null);
		 					// clear all other checkboxes that are checked
		 					check.parent().siblings().each(function(index, checkbox_container){
		 						var elm = $(checkbox_container).children('input')[0];
		 						if(elm){
		 							$(elm).prop('checked', false);
		 						}
		 					});
		 				});
		 				createMarkers(json, map, search_string)
		 			}
		 		})
	  	});
	  }
	}
})();


