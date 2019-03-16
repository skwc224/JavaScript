var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn")

button.on("click", function() {
    d3.event.preventDefault();
    tbody.text("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});