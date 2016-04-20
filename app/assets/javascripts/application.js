// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


  // function initMap() {

  //   var parkMap = new google.maps.StyledMapType([
  //         {"stylers": [
  //         { "weight": 2.6 },
  //         { "visibility": "on" },
  //         { "saturation": -9 },
  //         { "hue": "#0008ff" }
  //       ]
  //     },{
  //       "featureType": "poi.park",
  //       "elementType": "geometry",
  //       "stylers": [
  //         { "saturation": 26 },
  //         { "hue": "#00ff09" },
  //         { "lightness": -19 },
  //         { "gamma": 0.98 }
  //       ]
  //     },{
  //       "featureType": "road.highway",
  //       "stylers": [
  //         { "hue": "#0077ff" }
  //       ]
  //     },{
  //       "featureType": "transit.station",
  //       "stylers": [
  //         { "hue": "#ff1a00" },
  //         { "visibility": "simplified" }
  //       ]
  //     },{
  //       "featureType": "poi.sports_complex",
  //       "stylers": [
  //         { "gamma": 0.83 },
  //         { "saturation": 45 },
  //         { "lightness": -41 },
  //         { "hue": "#00ff2b" }
  //       ]
  //     },{
  //       "featureType": "road.arterial",
  //       "stylers": [
  //         { "visibility": "simplified" },
  //         { "saturation": 48 },
  //         { "weight": 1.9 },
  //         { "hue": "#007fff" },
  //         { "lightness": -26 }
  //       ]
  //     },{
  //       "featureType": "transit.line"  }
  //   ], {name: 'PYC'});

  // var map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: -34.397, lng: 150.644},
  //   zoom: 15,
  //   mapTypeControlOptions: {
  //       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'parkmappark']
  //     }
  // });

  // map.mapTypes.set('parkmappark', parkMap);
  // map.setMapTypeId('parkmappark');
  
  // infowindow = new google.maps.InfoWindow();  // window to show marker data on marker click

  // var geocoder = new google.maps.Geocoder();
  // var imageCurrentLocation = 'http://i.imgur.com/7qKaxAg.png'
  // var infoWindow = new google.maps.InfoWindow({map: map});
  // var myPosition = new google.maps.Marker({
  //   map: map,
  //   icon: imageCurrentLocation,
  //   title: "this is you"
  // });
  
  // createMarkers(map);

  // // Try HTML5 geolocation.
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     var pos = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     };
  //     myPosition.setPosition(pos);
  //     map.setCenter(pos);
  //   }, function() {
  //     handleLocationError(true, infoWindow, map.getCenter());
  //   });
  // } else {
  //   // Browser doesn't support Geolocation
  //   handleLocationError(false, infoWindow, map.getCenter());
  //   }
  // }
  // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //   infoWindow.setPosition(pos);
  //   infoWindow.setContent(browserHasGeolocation ?
  //                         'Error: The Geolocation service failed.' :
  //                         'Error: Your browser doesn\'t support geolocation.');
  // }
  
  // var image = 'http://i.imgur.com/Nei7Oob.png';

  // function createMarkers(map) {
  //   <% Park.all.where.not(lat: nil).each do |park| %>
  //     var marker = new google.maps.Marker({
  //     map: map,
  //     icon: image,
  //     title: "<%= "#{park.name}" %>",
  //     position: {
  //       lat: <%= park.lat %>,
  //       lng: <%= park.lng %>
  //       }
  //      });
  //      google.maps.event.addListener(marker, 'click', function(event) {
  //                   infowindow.setContent(this.html);
  //                   infowindow.setPosition(this.position);
  //                   infowindow.open(map, this);
  //               });
  //   <% end %>
  // }
