// Add console.log to check to see if our code is working.
console.log("working");

//load data 
d3.csv("https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/loc_frame.csv").then(function(data) {
    const locData = data;

    //test output 
    console.log(locData[0]);



});

var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();