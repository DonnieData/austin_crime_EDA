// Add console.log to check to see if our code is working.
console.log("working");

//load data 
const url = 'https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/test_data/all_crime_day.csv'

d3.csv(url).then(function(data) {
    var grData =  data; 

    // extract and assign data features to variables 
    var day = grData.map(function(i){
        return i.day
    });
    
    var countGr = grData.map(function(i){
        return i.count
    });

    var hour = grData.map(function(i){
        return i.hour
    });
    
    console.log(hour)
    var year = grData.map(function(i){
        return i.year
    });

    var heatData = [{
        z: countGr.reverse(),
        x: day.reverse(), 
        y: hour.reverse(),
        type: 'heatmap',
        hoverongaps: false,
        colorscale:'YlGnBu'
     
    }];

    //place holder 
    var heatlayout = {
       };
    
    var config = {responsive: true}

    Plotly.newPlot('heat1', heatData, heatlayout, config);

    var heatData2 = [{
        z: countGr,
        x: day, 
        y: hour,
        type: 'heatmap',
        hoverongaps: false,
     
    }];

    var heat2layout = {
    };
 
    Plotly.newPlot('heat2', heatData2, heat2layout, config);

});


