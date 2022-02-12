var request = require('request');



exports.accesstoken = async (req,res)=>{
var options = {
  'method': 'POST',
  'url': 'https://auth.reloadly.com/oauth/token',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "client_id": "eLuyEIpz4Xbo9stzTWuLoU9jiozl9iV4",
    "client_secret": "tVGOuxSCKl-P9CIRKAnf9ecENm4FeH-nwbm8mmqvUjWLMUwvQRSK3EKOMXy1uIF",
    "grant_type": "client_credentials",
    "audience": "https://topups-sandbox.reloadly.com"
  })

};
request(options, function (error, response) {
  if (error) {
  throw new Error(error);
  res.json(error)
}
res.send(response.body)
  //console.log(response.body);
  //const serverRes = response.body
  //return response.body

});
// res.end()
}
//CONSOLE

exports.operators = async (req,res)=>{
var options = {
  'method': 'GET',
  'url': 'https://topups-sandbox.reloadly.com/operators?page=1&size=100&includeBundles=true&includeData=true&includePin=true&suggestedAmounts=true&suggestedAmountsMap=true',
  'headers': {
    'Authorization': `Bearer ${req.headers.token}`,
    'Accept': 'application/com.reloadly.topups-v1+json',
  }
};
request(options, function (error, response) {
  if (error){
    throw new Error(error);
    res.json(error) ;
  } 
  
  //console.log(response.body);
  res.send(response.body);
   var serverRes = response.body
   return serverRes
})
 
}

exports.getoperatorbyid = async(req,res) =>{
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://topups-sandbox.reloadly.com/operators/128?suggestedAmounts=true&suggestedAmountsMap=true',
  'headers': {
    'Authorization': `Bearer ${req.headers.token}`,
    'Accept': 'application/com.reloadly.topups-v1+json'
  }
};
request(options, function (error, response) {
  if (error){
   throw new Error(error);
   res.json(error) ;
  console.log(response.body);
  }
  res.send(response.body);
  var serverRes = response.body
  return serverRes
}); 
}



exports.detectoperator = async(req,res) =>{
var request = require('request');
var options = {
  'method': 'GET',
  'url': `https://topups-sandbox.reloadly.com/operators/auto-detect/phone/${req.params.phone}/countries/${req.params.phone}?suggestedAmountsMap=true&SuggestedAmounts=true`,
  'headers': {
    'Authorization': `Bearer ${req.headers.token}`,
    'Accept': 'application/com.reloadly.topups-v1+json'
  }
};
request(options, function (error, response) {
  if (error) {
  throw new Error(error);
  res.json(error) ;
 // console.log(response.body);
  }
  res.send(response.body);
  var serverRes = response.body
  return serverRes
})

}

exports.getallcountries = async(req,res) =>{
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://topups.reloadly.com/countries?page=1&size=1',
  'headers': {
    'Accept': 'application/com.reloadly.topups-v1+json',
    'Authorization': `Bearer ${req.headers.token}`
  }
};
request(options, function (error, response) {
  if (error){
   throw new Error(error);
   res.json(error) ;
  console.log(response.body);
  }
  res.send(response.body);
  var serverRes = response.body
  return serverRes
}); 

}





