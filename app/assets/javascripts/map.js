	'use strict';

	var parkMap = (function () {
		// var map;
		var markers = [];
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

		var image = 'http://i.imgur.com/Nei7Oob.png';
		// infowindow = new google.maps.InfoWindow();  // window to show marker data on marker click

		function createMarkers(data, map) {
			data.forEach(function(dataPoint) {
	  		// debugger;
	  		if(dataPoint.lat !== null) {
	  			markers.push(new google.maps.Marker(
		  			{
		  				map: map,
		  				icon: image,
		  				title: dataPoint.name,
		  				position: {
		  					lat: parseFloat(dataPoint.lat),
		  					lng: parseFloat(dataPoint.lng)
		  				}
		  			}
	  			));
	  		}
	  	});
	  	// google.maps.event.addListener(markers, 'click', function(event) {
    //       infowindow.setContent(this.html);
    //       infowindow.setPosition(this.position);
    //       infowindow.open(map, this);
    //   });
		}

		return {
			initialize: function(domID, data) {
				var map = new google.maps.Map(document.getElementById(domID),{
					center: {lat: -34.397, lng: 150.644},
					zoom: 14,
					mapTypeControlOptions: {
						mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'parkmappark']
					}
				});

			  var imageCurrentLocation = 'http://i.imgur.com/7qKaxAg.png'
			  var myPosition = new google.maps.Marker({
			    map: map,
			    icon: imageCurrentLocation,
			    title: "this is you"
			  });
				var x = new google.maps.StyledMapType(mapStyles, {name: 'PYC'});
				map.mapTypes.set('parkmappark', x);
				map.setMapTypeId('parkmappark');
				createMarkers(data, map);

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
			  		handleLocationError(true, infoWindow, map.getCenter());
			  	});
			  } else {
			    // Browser doesn't support Geolocation
			    handleLocationError(false, infoWindow, map.getCenter());
			  }
				function handleLocationError(browserHasGeolocation, infoWindow, pos) {
					infoWindow.setPosition(pos);
					infoWindow.setContent(browserHasGeolocation ?
						'Error: The Geolocation service failed.' :
						'Error: Your browser doesn\'t support geolocation.');
				}
			}
		};
	})();