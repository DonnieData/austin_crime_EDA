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
    "test_layer_18": layer1,
    "2018": layer2,
    "2019": layer3,
    "2020": layer4,

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


d3.json("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/geo_data18.json").then(function(data){

    L.geoJson(data, {
        style: {
            color: "#427FC8",
            weight: 3,
            opacity: 1
          },
        //unpack to access feature element for styling 
       onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.zipcode);
        },
        
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.zipcode);
        }
    }).addTo(layer2);

    console.log(data['features'][0]['properties']['zipcode'])

    var info18; 


    d3.json("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/new_geo_data_18.json").then(function(dataInfo){

      //console.log(data['features'][0]['properties']['zipcode'])
     // console.log(dataInfo[data['features'][0]['properties']['zipcode']])

      console.log(data['features'][0]['properties']['crime_data'])
      console.log(data['features'][0]['properties']['crime_data'][0])
      console.log(data['features'][0]['properties']['crime_data'][0][0])
      console.log(data['features'][0]['properties']['crime_data'][0][1])

     //info18 = dataInfo;

    });

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
          layer.bindPopup("<table class='mapinfo'><tr><td>Cell 1</td><td>Cell 2</td></tr></table>");
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




