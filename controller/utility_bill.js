


exports.utilitybill = async (req,res)=>{
    var request = require('request');
    
    var options = {
      'method': 'POST',
      "body" : req.body,
    //  'url': 'https://auth.reloadly.com/oauth/token',
      'url'  :"https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=8121787777&APIKey=vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG&REQTYPE=BILLINFO&SERCODE=MPE&CUSTNO=8121787777&REFMOBILENO=8121787777&AMT=0&STV=0&FIELD1=[FIELD1]&FIELD2=[FIELD2]&FIELD3=[FIELD3]&FIELD4=[FIELD4]&FIELD5=[FIELD5]&PCODE=500081&LAT=17.3617&LONG=78.4751&RESPTYPE=JSON",
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
    
        "APIKey": "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",
       
      })
    
    };
    request(options, function (error, response) {
      if (error) {
      throw new Error(error);
      res.json(error)
    }
    res.send(response.body)
      console.log(response.body);
      //const serverRes = response.body
      //return response.body
    
    });
    // res.end()
    }