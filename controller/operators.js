var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://topups.reloadly.com/operators?page=1&size=2&includeBundles=true&includeData=true&includePin=true&simplified=false&suggestedAmounts=true&suggestedAmountsMap=true',
  'headers': {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN_HERE',
    'Accept': 'application/com.reloadly.topups-v1+json',
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

//https://topups-sandbox.reloadly.com/operators?page=1&size=2&includeBundles=true&includeData=true&includePin=true&npmsuggestedAmounts=true&suggestedAmountsMap=true