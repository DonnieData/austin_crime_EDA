// Add console.log to check to see if our code is working.
console.log("working");

//Map Setup

// create tile layers
let streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Create map object and add default layer
let map = L.map('mapid', {
	center: [30.26548193884994, -97.74588441015467],
	zoom: 13,
	layers: [streets]
});

// create base to hold map layers
let baseMap = {
    "Streets":streets
};

//create overlay objects for map 
let layer1 = new L.LayerGroup();
let layer2 = new L.LayerGroup();
let layer3 = new L.LayerGroup();
let layer4 = new L.LayerGroup();
let layer5 = new L.LayerGroup();
let layer6 = new L.LayerGroup();

// create refernece to overlays 
let overlays = {
    "all": layer1,
    "burglary of vehicle": layer2,
    "family disturbance": layer3,
    "theft": layer4,
    "assault": layer5,
    "criminal mishchief":layer6

};

//add control to to map for user-end toggling 
L.control.layers(baseMap, overlays).addTo(map);


let zipcodesGeo = "https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/austin_area_zip_codes.geojson"

let zipStyle = {
    color: "#427FC8",
    fillColor:"#E5E8E8",
    weight: 2
  }
d3.json(zipcodesGeo).then(function(data){
    L.geoJson(data, {
        style: zipStyle,
        //unpack to access feature element for styling 
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.zipcode );
        }
    }).addTo(layer1);
})


d3.json("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/burg_geo.json").then(function(data){
    L.geoJson(data, {
        style: {
            color: "#427FC8",
            weight: 3,
            opacity: 1
          },
        //unpack to access feature element for styling 
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.zipcode + "<br>" + 
                          feature.properties.crime_cat + "<br>" + 
                          feature.properties.crime_count);
        }
    }).addTo(layer2);

})

d3.json("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/family_zip_geo.json").then(function(data){
    L.geoJson(data, {
        style: {
            color: "#427FC8",
            weight: 3,
            opacity: 1
          },
        //unpack to access feature element for styling 
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.zipcode );
        }
    }).addTo(layer3);

})

d3.json("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/theft_zip_geo.json").then(function(data){
    L.geoJson(data, {
        style: {
            color: "#427FC8",
            weight: 3,
            opacity: 1
          },
        //unpack to access feature element for styling 
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.zipcode );
        }
    }).addTo(layer4);

})

d3.json("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/assault_geo.json").then(function(data){
    L.geoJson(data, {
        style: {
            color: "#427FC8",
            weight: 3,
            opacity: 1
          },
        //unpack to access feature element for styling 
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.zipcode );
        }
    }).addTo(layer5);

})

d3.json("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/crim_mis_geo.json").then(function(data){
    L.geoJson(data, {
        style: {
            color: "#427FC8",
            weight: 3,
            opacity: 1
          },
        //unpack to access feature element for styling 
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.zipcode );
        }
    }).addTo(layer6);

})


