$.ajax({
  url: 'https://httpapi.com/api/billing/customer-transactions/search.json??auth-userid=0&api-key=key&no-of-records=10&page-no=1',
  type: 'GET', 
  dataType: 'json',
  success: function(data) {
    // Handle the successful response
    console.log(data);
    // Update the UI with the retrieved data
  },
  error: function(error) {
    // Handle errors
    console.error('Error fetching data:', error);
  }
});
