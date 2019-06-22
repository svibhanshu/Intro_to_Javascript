// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

function renderTable(){
    tbody.html("");
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  tableData = tableData.filter(row => row.datetime === inputValue);

  console.log(tableData);
renderTable();
});
renderTable();