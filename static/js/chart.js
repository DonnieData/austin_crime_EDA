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


    // heat map subplots 
    console.log(typeof grData[3]['year'])
    console.log(grData[3]['year'])
    var day18 = grData.map(i => {if (i.year == "2018"){return i.day }});
    var count18 = grData.map(i => {if (i.year == "2018"){return i.count }});
    var hour18 = grData.map(i => {if (i.year == "2018"){ return i.hour }});

    var day19 = grData.map(i => {if (i.year == "2019"){ return i.day }});
    var count19 = grData.map(i => {if (i.year == "2019"){ return i.count }});
    var hour19 = grData.map(i => {if (i.year == "2019"){ return i.hour }});

    var day20 = grData.map(i => {if (i.year == "2020"){return i.day }});
    var count20 = grData.map(i => {if (i.year == "2020"){ return i.count }});
    var hour20 = grData.map(i => {if (i.year == "2020"){ return i.hour }});

       
    
    var heat2018 = {
        z: count18,
        x: day18,
        y: hour18,
        type: 'heatmap',
        hoverongaps: false,
        colorscale:'YlGnBu',
        reversescale: true,
        name: '2018'

    };

    var heat2019 = {
        z: count19,
        x: day19,
        y: hour19,
        xaxis: 'x2',
        yaxis: 'y2',
        type: 'heatmap',
        hoverongaps: false,
        colorscale:'YlGnBu',
        reversescale: true,
        name: '2019',
        showscale: false,
    
    };

    var heat2020 = {
        z: count20,
        x: day20,
        y: hour20,
        xaxis: 'x3',
        yaxis: 'y3',
        type: 'heatmap',
        hoverongaps: false,
        colorscale:'YlGnBu',
        reversescale: true,
        name: '2020',
        showscale:false,
     

    };

    var heatDataMulti = [heat2018, heat2019, heat2020]

    var multiLayout = {
        height: 475,
        title:{text:'Crime Reports by Year'},
        annotations: ['test_1','test_2'],
        grid: {
            rows: 1,
            columns: 3,
        },
        yaxis: {
            nticks: 24,
        },
        font: {size:11},
        padding: {t:0,b:0}
    };
       

    Plotly.newPlot('heat2',heatDataMulti,multiLayout,config);

    
});


