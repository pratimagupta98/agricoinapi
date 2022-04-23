const Operators = require("../models/mo_operators");



exports.mobileRecharge = async (req, res) => {
var request = require('request');


create_randomString(15);
  function create_randomString(string_length) {
    (randomString = ""),
      (characters = "ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ");
    for (var i, i = 0; i < string_length; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomString;
  }
var options = {
  'method': 'GET',
  'url': 'https://api.zuelpay.com/utility/recharge/service_providers',
  'headers': {
    'Token': 'ZKEYf2e95f5c4ad2917af5f57bf58',
    'Accept': 'application/json'
    
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
}