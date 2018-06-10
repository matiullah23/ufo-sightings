// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateandtime");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the search button
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set variable for the addresses of the sightings
var sightingData = dataSet;

// Fill the table
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < sightingData.length; i++) {
    var sightings = sightingData[i];
    var fields = Object.keys(sightings);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sightings[field];
    }
  }
}


// Set up the search
function handleSearchButtonClick() {
  // Set variable for the inputted date
  var enteredDate = $dateInput.value.trim().toLowerCase();

  // Set sightingData to an array of all addresses whose "date" matches the filter
  sightingData = dataSet.filter(function(sightings){
    var viewDate = sightings.datetime.toLowerCase();


    return viewDate === enteredDate;
  });




  renderTable();
}

// Render the table for the first time on page load
renderTable();
