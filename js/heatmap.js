// Create the tile layer that will be the background of our map
var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});


// initialize the layer groups we'll be using
var layers = {
  AMAZON: new L.LayerGroup(),
  APPLE: new L.LayerGroup(),
  FACEBOOK: new L.LayerGroup(),
};

// Create the map with our layers
var map = L.map("map-id", {
  center: [37.7749, -122.4194],
  zoom: 13,
  layers: [
	  layers.AMAZON,
	  layers.APPLE,
	  layers.FACEBOOK
	  ]
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

// Create an overlays object to add to the layer control
var overlays = {
  "Amazon": layers.AMAZON,
  "Apple": layers.APPLE,
  "Facebook": layers.FACEBOOK,
};


// create separate layer groups for each year
var eleven = L.layerGroup(eleven)
var twelve = L.layerGroup(twelve)
var thirteen = L.layerGroup(thirteen)
var fourteen = L.layerGroup(fourteen)
var fifteen = L.layerGroup(fifteen)
var sixteen = L.layerGroup(sixteen)
var seventeen = L.layerGroup(seventeen)
var eighteen = L.layerGroup(eighteen)

// create overylays
var overlayMaps = {
  2011 : eleven,
  2012 : twelve,
  2013: thirteen,
  2014: fourteen,
  2015: fifteen,
  2016: sixteen,
  2017: seventeen,
  2018: eighteen
}

// Create a control for our layers, add our overlay layers to it
L.control.layers(overlayMaps, overlays).addTo(map);

// Create a legend to display information about our map
var info = L.control({
  position: "topright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};

// Add the info legend to the map
info.addTo(map);

// define arrays to hold markers
// var 2011 = []
// var 2012 = []
// var 2013 = []
// var 2014 = []
// var 2015 = []
// var 2016 = []
// var 2017 = []
// var 2018 = []

// var url = "../all_zip_cities_years.csv";

// loop thru locations and create markers 
d3.csv("../all_zip_cities_years.csv", function(response) {
  // var year = zipData.year

  console.log(response);

  var heatArray = [];

  for (var i = 0; i <  response.length; i++) {
    var location = ([response[i].lat, response[i].lon, response[i].ZRI]);

    if (location) {
      heatArray.push([location[0],location[1],location[2]]);
      };
  }

  console.log(heatArray)

  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 35
  }).addTo(map);
});



