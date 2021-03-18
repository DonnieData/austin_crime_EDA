// Add console.log to check to see if our code is working.
console.log("working");

//load data 
d3.csv("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/loc_frame.csv").then(function(data) {
    const locData =  data;

    //test output 
    console.log(locData[0]);
    console.log(locData[16])
    
    console.log(locData[0]['incident_report_number'])

    var latLong = locData.map(function(i) {
        return {
            latitude: i.latitude,
            longitude: i.longitude
            
        };
    });
    // test object structure 
    console.log(latLong);
    console.log(latLong[16])
    console.log(latLong[16]['latitude'])

    // create initial map view 
    var map = L.map('mapid').setView([30.26548193884994, -97.74588441015467], 13);
    // create map layer 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // loop through location object and create markers 
    for (var i = 0; i < locData.length; i++) {
        marker = new L.marker([locData[i]['latitude'], locData[i]['longitude']])
        .bindPopup(locData[i]['incident_report_number'])
        .addTo(map);
    };

});

