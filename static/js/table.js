console.log("working");


    function buildTable(data,tableId) {
        var table = d3.select(tableId)
        data.forEach((dataRow) => {
            let row = table.append("tr");

            Object.values(dataRow).forEach((val) => {
                let cell = row.append("td")
                cell.text(val);

            });
        }
    )};
    

//map table_1
var url = "https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/sample_table.csv"
d3.csv(url).then(function(data) {

    console.log(data[0])
    console.log(data[2])

    buildTable(data,"#sampletab1")    
    buildTable(data,"#sampletab2")
});

//map table_2 
