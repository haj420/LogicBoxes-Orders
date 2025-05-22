$.ajax({
  url: 'https://test.httpapi.com/restapi/product/backorderservice/list.json?auth-userid=0&api-key=key&no-of-records=1&page-no=1&order-by=orderid ',
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