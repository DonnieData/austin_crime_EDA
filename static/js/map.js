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

// create refernece to overlays 
let overlays = {
    "2018": layer1,
    "2019": layer2,
    "2020": layer3
};

//add control to to map for user-end toggling 
L.control.layers(baseMap, overlays).addTo(map);


//Data
//top zipcode by top crime 
d3.csv("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/top10zip_by_top5offense.csv").then(function(data){

    function styleInfo(type,size){
        return {
        opacity: 1,
        radius: size,
        color: getColor(type)
        }
    }

    function getColor(type) {
        if(type == "FAMILY DISTURBANCE") {
            return "blue";
        }
        if(type == "CRIMINAL MISCHIEF") {
            return "red";
        }
        if(type == "BURGLARY OF VEHICLE") {
            return "blue";
        }
        if(type == "ASSAULT W/INJURY-FAM/DATE VIOL") {
            return "orange";
        }
        if(type == "THEFT") {
            return "green";
        }
        return "white";
    }
 
    for (var i = 0; i < data.length; i++) {
        marker = new L.circle([data[i]['latitude'], data[i]['longitude']],styleInfo(data[i]['offense_type'],data[i]['count']))
        .bindPopup(data[i]['offense_type'] +"<br>" + data[i]['count'])
        .addTo(samplayer1);
    };
});

d3.csv("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/reports_by_zip.csv").then(function(data){

    function styleInfo(size){
        return {
        opacity: 1,
        radius: (size/12),
        }
    }

    function getColor(type) {
        if(type == "FAMILY DISTURBANCE") {
            return "blue";
        }
        if(type == "CRIMINAL MISCHIEF") {
            return "red";
        }
        if(type == "BURGLARY OF VEHICLE") {
            return "blue";
        }
        if(type == "ASSAULT W/INJURY-FAM/DATE VIOL") {
            return "orange";
        }
        if(type == "THEFT") {
            return "green";
        }
        return "white";
    }
 
    for (var i = 0; i < data.length; i++) {
        marker = new L.circle([data[i]['latitude'], data[i]['longitude']],styleInfo(data[i]['count']))
        .bindPopup(data[i]['zip_code'] +"<br>" + data[i]['count'])
        .addTo(samplayer3);
    };
});
d3.csv("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/top10zip_by_top5offense.csv").then(function(data){

    console.log(data[3])


    function styleInfo(type,size){
        return {
        opacity: 1,
        radius: 8,
        color: getColor(type)
        }
    }

    function getColor(type) {
        if(type == "FAMILY DISTURBANCE") {
            return "blue";
        }
        if(type == "CRIMINAL MISCHIEF") {
            return "red";
        }
        if(type == "BURGLARY OF VEHICLE") {
            return "blue";
        }
        if(type == "ASSAULT W/INJURY-FAM/DATE VIOL") {
            return "orange";
        }
        if(type == "THEFT") {
            return "green";
        }
        return "white";
    }

    //function getSize(size) {
     //   if (size ==)

   // }

 

    for (var i = 0; i < data.length; i++) {
        marker = new L.circle([data[i]['latitude'], data[i]['longitude']],styleInfo(data[i]['offense_type'],data[i]['count']))
        .bindPopup(data[i]['offense_type'] +"<br>" + data[i]['count'])
        .addTo(samplayer1);
    };



});