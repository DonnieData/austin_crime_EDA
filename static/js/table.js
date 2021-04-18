console.log("working");

var table1 = d3.select("#sampletab1");

    function buildTable(data) {
       // let header = Object.keys(data[0]) 
       table1.append("tr")
        Object.keys(data[0]).forEach((label) => {
            let header = table1.append("th")
            header.text(label);
        })

        data.forEach((dataRow) => {
            let row = table1.append("tr");

            Object.values(dataRow).forEach((val) => {
                let cell = row.append("td")
                cell.text(val);

            });
        }
    )};
    


var url = "https://raw.githubusercontent.com/DonnieData/austin_crime_EDA/main/datasets/sample_table.csv"
d3.csv(url).then(function(data) {

    console.log(data[0])
    console.log(data[2])

    buildTable(data)    

});