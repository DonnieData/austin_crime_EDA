// Add console.log to check to see if our code is working.
console.log("working");

//load data 
const url = 'https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/test_data/all_crime_day_transposed.csv'
d3.csv(url).then(function(data) {
    var grData =  data.reverse(); 

    //console.log(grData[3])
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
    
   // console.log(hour)
    var year = grData.map(function(i){
        return i.year
    });

    var heatData = [{
        z: countGr,
        x: day, 
        y: hour,
        type: 'heatmap',
        hoverongaps: false,
        colorscale:'YlGnBu',
        reversescale: true
     
    }];

    //place holder 
    var heatlayout = {
        height: 525,
        yaxis: {
            nticks: 24
        },
       }
    
    var config = {responsive: true}

    Plotly.newPlot('heat1', heatData, heatlayout, config);



    var day18 = grData.map(i => {if (i.year = 2018.0) return i.day });
    var count18 = grData.map(i => {if (i.year = 2018.0) return i.count });
    var hour18 = grData.map(i => {if (i.year = 2018.0) return i.hour });

    console.log(hour18)
    
    var heat2018 = {
        z: count18,
        x: day18,
        y: hour18,
        type: 'heatmap',
        hoverongaps: false,
        colorscale:'YlGnBu',
        reversescale: true

    };

    var heat2018Copy = {
        z: count18,
        x: day18,
        y: hour18,
        type: 'heatmap',
        hoverongaps: false,
        colorscale:'YlGnBu',
        reversescale: true

    };

    var heatDataMulti = [heat2018Copy, heat2018]

    var multiLayout = {
        grid: {rows: 1, columns: 2, pattern: 'independent'}
    };

    Plotly.newPlot('heat2',heatDataMulti,multiLayout);

    
});


