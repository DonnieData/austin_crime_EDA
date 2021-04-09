// Add console.log to check to see if our code is working.
console.log("working");

//Heatmaps/load data 
var url1 = 'https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/all_crime_day_transposed.csv'
d3.csv(url1).then(function(data) {
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
        showscale:false
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
       

    Plotly.newPlot('heat1',heatDataMulti,multiLayout,config);  
});


//Line Chart load data 
var url2 = 'https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/offense_by_month.csv'
d3.csv(url2).then(function(data) {

    var data18 = data.filter(i => (i.year == 2018));
    var data19 = data.filter(i => (i.year == 2019));
    var data20 = data.filter(i => (i.year == 2020));

    console.log(data[0]['year'])
   

    //map(i => {if (i.year == "2018"){return i.day }});

   var trace18 = {
    type: "scatter",
    mode: "lines",
    name: '2018',
    x: data18.map(i => i.month),
    y: data18.map(i => i.count),
    line: {color: '#17BECF'}
  }

  var trace19 = {
    type: "scatter",
    mode: "lines",
    name: '2019',
    x: data19.map(i => i.month),
    y: data19.map(i => i.count),
    line: {color: 'black'}
  }


   var trace20 = {
    type: "scatter",
    mode: "lines",
    name: '2020',
    x: data20.map(i => i.month),
    y: data20.map(i => i.count),
    line: {color: '#17BECF'}
  }

  var data = [trace18,trace19,trace20];
  
  var layout = {
    height: 380,
    title: 'Time Series',
    xaxis: {autorange: true,
        rangeslider: true
        }
  };

  var config = {responsive: true}
Plotly.newPlot('line1', data, layout, config);

});

//Treemap 
//var url2 = 'https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/offense_by_month.csv'
//d3.csv(url2).then(function(data) {


//});

var values = ["30", "12", "13", "14", "15", "20", "30"]
var labels = ["A1", "A2", "A3", "A4", "A5", "B1", "B2"]
var parents = ["", "", "", "", "", "", ""]

var data = [{
  type: 'treemap',
  values: values,
  labels: labels,
  parents: parents,
  marker: {colorscale: 'Blues'}
}]


Plotly.newPlot('treetest', data)

var url3 = 'https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/offense_cat_countv2.csv'
d3.csv(url3).then(function(data) {
  

    var values = data.map(i => i.incident_count)
    var labels = data.map(i=> i.offense_type)
    var parents = data.map(i => i.parent)

    var subValues = [2000,1000,7000]
    var subLabels = ['2018','2019','2020']
    var subParents = ['BURGLARY OF VEHICLE','BURGLARY OF VEHICLE','BURGLARY OF VEHICLE']
    
    var traceValues = values.concat(subValues)
    var traceLabels = labels.concat(subLabels)
    var traceParents = parents.concat(subParents)

    console.log(traceValues)

    var traceData = [{
        type: 'treemap',
        values: traceValues ,
        labels: traceLabels ,
        parents: traceParents 
    }] 

    var layout = {
        height: 500,
      
    }
    var config = {responsive: true}
     Plotly.newPlot('tree1',traceData,layout,config)
});