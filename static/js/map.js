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
let samplayer1 = new L.LayerGroup();
let samplayer2 = new L.LayerGroup();
let samplayer3 = new L.LayerGroup();

// create refernece to overlays 
let overlays = {
    "sample layer 1": samplayer1,
    "sample layer 2": samplayer2,
    "sample layer 3": samplayer3
};

//add control to to map for user-end toggling 
L.control.layers(baseMap, overlays).addTo(map);


//Data

//load data 
d3.csv("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/test_data/loc_frame.csv").then(function(data) {
    var locData =  data;

    //test output 
    //console.log(locData[0]);
    //console.log(locData[16])  
    //console.log(locData[0]['incident_report_number'])

    var latLong = locData.map(function(i) {
        return {
            latitude: i.latitude,
            longitude: i.longitude
            
        };
    });
    // test object structure 
    //console.log(latLong);
    //console.log(latLong[16])
    //console.log(latLong[16]['latitude'])


// function to style markers
    var styleInfo = {
            opacity: 1,
            radius: 8 
    }

    // loop through location object and create markers 
    for (var i = 0; i < locData.length; i++) {
        marker = new L.circle([locData[i]['latitude'], locData[i]['longitude']],styleInfo)
        .bindPopup(locData[i]['incident_report_number'])
        .addTo(samplayer2);
    };

});
