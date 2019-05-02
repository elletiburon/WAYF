var config = {
  apiKey: "AIzaSyDR_r33Wa1FGkjlSph81ZV53WqTrdoHcqI",
  authDomain: "project1-21d42.firebaseapp.com",
  databaseURL: "https://project1-21d42.firebaseio.com",
  projectId: "project1-21d42",
  storageBucket: "project1-21d42.appspot.com",
  messagingSenderId: "718469816684"
};

firebase.initializeApp(config);

var database = firebase.database();

var map;
var service; 
var infowindow;
var zipcode = sessionStorage.getItem("zipcode");
var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBMrJ8Jc38iT-3kb62eF0lhsFvJ69dwaPY";


function initialize() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.8781, lng: -87.6298 },
    zoom: 15
  });
  infoWindow = new google.maps.InfoWindow();
  if (navigator.geolocation) {
    console.log('******',navigator.geolocation);
    var local = navigator.geolocation.getCurrentPosition(success, block);
    console.log('******LOCAL', local);
    

  } 

  function block(){
         
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log("response", response);
        console.log("lat&long", response.results[0].geometry.location);
        var userPos = response.results[0].geometry.location;
        var request = {
          location: userPos,
          radius: '500',
          type: ['restaurant']
        };
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
        infoWindow.setPosition(userPos);
        map.setCenter(userPos);
        
      });
      
    };

  function success(position){

    console.log('*******allow')
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
  
    var request = {
      location: pos,
      radius: '500',
      type: ['restaurant']
    };
  
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
    infoWindow.setPosition(pos);
    map.setCenter(pos);
    
  }
  
  
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var ninfoWindow = new google.maps.InfoWindow();
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i], ninfoWindow);
    }
    
  }
  function createMarker(place, ninfoWindow) {
    console.log(place);
    console.log("this is ninfoWindow",ninfoWindow)
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
  
    google.maps.event.addListener(marker, 'click', function (event) {
      console.log(event);      
      ninfoWindow.setContent(place.name);
      ninfoWindow.open(map, this);
      map.setCenter(place.geometry.location);
    });
  }
  
  
}
var dateDay = sessionStorage.getItem("dateDay");
    database.ref().orderByChild("dateDay").equalTo(dateDay).once("value", function(snapshot){
        var foundMatch = snapshot.val();
        console.log(foundMatch);
        var firstName1 = $("<div>");
        var age1 = $("<div>");
        var bio1 = $("<div>");
        firstName1.text("Name: " + sessionStorage.getItem("firstName"));
        age1.text("Age: " + sessionStorage.getItem("birthday"));
        bio1.text("About: " + sessionStorage.getItem("about"));
        $("#info1").append(firstName1, age1, bio1);

        //add session ref
        
        

    });
