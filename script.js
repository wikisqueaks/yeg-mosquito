document.getElementById('query-btn').addEventListener('click', function() {
    const selectedDate = document.getElementById('date-input').value;

    Papa.parse('data.csv', {
        download: true,
        header: true,
        complete: function(results) {
            const dataForSelectedDate = results.data.filter(row => row.date === selectedDate);

            // Display this data in the #results div
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = JSON.stringify(dataForSelectedDate, null, 2); // Quick way to show the data
        }
    });
});