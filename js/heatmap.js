
var myMap = L.map("map-id", {
  center: [37.7749, -122.4194],
  zoom: 13
});
// Create the tile layer that will be the background of our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


// Create the map with our layers


// Create a control for our layers, add our overlay layers to it
//L.control.layers(layer1).addTo(myMap);

// // initialize all of the layerGroups that we will be using
// var layers = {
//   AMAZON: new L.LayerGroup(),
//   APPLE: new L.LayerGroup(),
//   FACEBOOK: new L.LayerGroup(),
// };



// Add our 'lightmap' tile layer to the map
// lightmap.addTo(map);

// // Create an overlays object to add to the layer control
// var overlays = {
//   "Amazon": layers.AMAZON,
//   "Apple": layers.APPLE,
//   "Facebook": layers.FACEBOOK,
// };



// // Create a legend to display information about our map
// var info = L.control({
//   position: "topright"
// });

// // When the layer control is added, insert a div with the class of "legend"
// info.onAdd = function() {
//   var div = L.DomUtil.create("div", "legend");
//   return div;
// };


// // Add the info legend to the map
// info.addTo(map);


// function createMarkers(response) {
//   var locations = response.data
// } 






// var url = "";

// var 


// d3.json(url, function(response) {

//   console.log(response);

//   var heatArray = [];

//   for (var i = 0; i < response.length; i++) {
//     var location = response[i].location;

//     if (location) {
//       heatArray.push([location.coordinates[1], location.coordinates[0]]);
//     }
//   }

//   var heat = L.heatLayer(heatArray, {
//     radius: 20,
//     blur: 35
//   }).addTo(myMap);

// });
