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
    "2018": layer1,
    "2019": layer2,
    "2020": layer3,

};

//add control to to map for user-end toggling 
L.control.layers(baseMap, overlays).addTo(map);

var styles = {
  outline: "thin solid gray"
};
$("#tstyle").css(styles);

let zipcodesGeo = "https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/new_geo_data_18.json"

let zipStyle = {
    color: "#427FC8",
    weight: 2,
    opacity: 1
  }

  
d3.json(zipcodesGeo).then(function(data){
    L.geoJson(data, {
        style: zipStyle,
        //unpack to access feature element for styling 
        onEachFeature: function(feature, layer) {
          layer.bindPopup("<b>Zip Code:</b> " + feature.properties.zipcode +" "+
          "<br><br>"+
          "<table style='outline: thin solid gray;'>"+
          "<tr style='outline: thin solid gray;'>"+
          "<th>"+"Offense Category" +"</th><th>"+ "Report Count" + "</th>"+
          "</tr>"+
          "<tr>"+
          "<td  id='tstyle'>"+feature.properties.crime_data[0][0] +"</td><td>"+ feature.properties.crime_data[0][1] + "</td>"+
          "</tr>"+
          "<tr>"+
          "<td>"+feature.properties.crime_data[1][0] +"</td><td>"+ feature.properties.crime_data[1][1] + "</td>"+
          "</tr>"+
          "<tr>"+
          "<td>"+feature.properties.crime_data[2][0] +"</td><td>"+ feature.properties.crime_data[2][1] + "</td>"+
          "</tr>"+
          "<tr>"+
          "<td>"+feature.properties.crime_data[3][0] +"</td><td>"+ feature.properties.crime_data[3][1] + "</td>"+
          "</tr>"+
          "<tr>"+
          "<td>"+feature.properties.crime_data[4][0] +"</td><td>"+ feature.properties.crime_data[4][1] + "</td>"+
          "</tr>"+
          "</table>" );
        }


    }).addTo(layer1);

    
})


d3.json("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/new_geo_data_19.json").then(function(data){

    L.geoJson(data, {
        style: {
            color: "#427FC8",
            weight: 3,
            opacity: 1
          },
        //unpack to access feature element for styling 
       onEachFeature: function(feature, layer){
        layer.bindPopup("<b>Zip Code:</b> " + feature.properties.zipcode +" "+
        "<br><br>"+
        "<table style='outline: thin solid gray;'>"+
        "<tr style='outline: thin solid gray;'>"+
        "<th>"+"Offense Category" +"</th><th>"+ "Report Count" + "</th>"+
        "</tr>"+
        "<tr>"+
        "<td  id='tstyle'>"+feature.properties.crime_data[0][0] +"</td><td>"+ feature.properties.crime_data[0][1] + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>"+feature.properties.crime_data[1][0] +"</td><td>"+ feature.properties.crime_data[1][1] + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>"+feature.properties.crime_data[2][0] +"</td><td>"+ feature.properties.crime_data[2][1] + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>"+feature.properties.crime_data[3][0] +"</td><td>"+ feature.properties.crime_data[3][1] + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>"+feature.properties.crime_data[4][0] +"</td><td>"+ feature.properties.crime_data[4][1] + "</td>"+
        "</tr>"+
        "</table>" );

        }
        
    }).addTo(layer2);

})


d3.json("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/new_geo_data_20.json").then(function(data){

    L.geoJson(data, {
        style: {
            color: "#427FC8",
            weight: 3,
            opacity: 1
          },
        //unpack to access feature element for styling 
       onEachFeature: function(feature, layer){
        layer.bindPopup("<b>Zip Code:</b> " + feature.properties.zipcode +" "+
        "<br><br>"+
        "<table style='outline: thin solid gray;'>"+
        "<tr style='outline: thin solid gray;'>"+
        "<th>"+"Offense Category" +"</th><th>"+ "Report Count" + "</th>"+
        "</tr>"+
        "<tr>"+
        "<td  id='tstyle'>"+feature.properties.crime_data[0][0] +"</td><td>"+ feature.properties.crime_data[0][1] + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>"+feature.properties.crime_data[1][0] +"</td><td>"+ feature.properties.crime_data[1][1] + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>"+feature.properties.crime_data[2][0] +"</td><td>"+ feature.properties.crime_data[2][1] + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>"+feature.properties.crime_data[3][0] +"</td><td>"+ feature.properties.crime_data[3][1] + "</td>"+
        "</tr>"+
        "<tr>"+
        "<td>"+feature.properties.crime_data[4][0] +"</td><td>"+ feature.properties.crime_data[4][1] + "</td>"+
        "</tr>"+
        "</table>" );

        }
        
    }).addTo(layer3);

})







